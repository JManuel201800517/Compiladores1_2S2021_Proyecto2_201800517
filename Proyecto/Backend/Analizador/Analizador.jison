// Parte lexica

%lex

%option case-insensitive

%%

\s+        // se ignoran los espacios en blanco
"//".*      // Comentario linea actual

// Palabras Reservadas

"int"               return 'P_INT'
"double"            return 'P_DOUBLE'
"boolean"           return 'P_BOOLEAN'
"char"              return 'P_CHAR'
"string"            return 'P_STRING' 
"new"               return 'P_NEW'  
"dynamiclist"       return 'P_DYNAMICLIST' 
"append"            return 'P_APPEND'
"getvalue"          return 'P_GETVALUE'
"setvalue"          return 'P_SETVALUE'
"if"                return 'P_IF'
"else"              return 'P_ELSE'
"switch"            return 'P_SWITCH'
"case"              return 'P_CASE'
"default"           return 'P_DEFAULT'
"break"             return 'P_BREAK'
"while"             return 'P_WHILE'
"for"               return 'P_FOR'
"do"                return 'P_DO'
"continue"          return 'P_CONTINUE'
"return"            return 'P_RETURN'
"void"              return 'P_VOID'
"writeline"         return 'P_WRITELINE'
"tolower"           return 'P_TOLOWER'
"toupper"           return 'P_TOUPPER'
"lenght"            return 'P_LENGHT'
"truncate"          return 'P_TRUNCATE'
"round"             return 'P_ROUND'
"typeof"            return 'P_typeof'
"tostring"          return 'P_TOSTRING'
"tochararray"       return 'P_TOCHARARRAY'
"start"             return 'P_START'
"with"              return 'P_WITH'
"true"              return 'P_TRUE'
"false"             return 'P_FALSE'

//Simbolos

"+"               return 'P_SUMA'
"-"               return 'P_RESTA'
"*"               return 'P_MULTIPLICACION'
"/"               return 'P_DIVISION'
"^"               return 'P_POTENCIA'
"%"               return 'P_MODULO'
"="               return 'P_IGUAL'
"=="              return 'P_IGUALACION'
"!="              return 'P_DIFERENTE'
"<"               return 'P_MENOR'
"<="              return 'P_MENORIGUAL'
">"               return 'P_MAYOR'
">="              return 'P_MAYORIGUAL'
"||"              return 'P_OR'
"&&"              return 'P_AND'
"!"               return 'P_NOT'
"("               return 'P_PAR1'
")"               return 'P_PAR2'
"{"               return 'P_LLAVE1'
"}"               return 'P_LLAVE2'
"["               return 'P_CORCHETE1'
"]"               return 'P_CORCHETE2'
"."               return 'P_PUNTO'
","               return 'P_COMA'
";"               return 'P_PUNTOYCOMA'
":"               return 'P_DOSPUNTOS'
"?"               return 'P_PREGUNTA'
"/*"              return 'P_COMENINICIO'
"//"              return 'P_COMENTARIO'
"*/"              return 'P_COMENFINAL'


// Expresiones Regulares

 [\"\“\']           return 'P_CADENAS'

[0-9]+("."[0-9]+)?\b    return 'P_NUMERO';

([a-zA-Z_])[a-zA-Z0-9_]* return 'P_ID';

\"[^\"]*\"              { yytext = yytext.substr(1,yyleng-2); return 'Tok_string'; }



// Editar desde aqui

<<EOF>>				return 'EOF';
.					{ console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                          Func_Error.ObtenerInstancia().insertar(new Cons_Error("Lexico","Caracter: \" "+yytext+"\" no es valido" ,yylloc.first_line,yylloc.first_column));
                                          return null; }

/lex

//Definimos codigo 


%{

    function AST_Node(tag,value,fila,columna){
        this.tag = tag;
        this.value = value;
        this.fila = fila;
        this.columna = columna;

        this.childs = [];

        this.addChilds = addChilds;
        this.getSon = getSon;

        function addChilds(){
            for (var i = 0; i < arguments.length; i++) {
                this.childs.push(arguments[i]);
                if (arguments[i]!== null){
                    arguments[i].padre = this;
                }
            }
        }  

        function getSon(pos){
            if(pos > this.hijos.length - 1) return null;
            return this.hijos[pos];
        }
    };

%}

// Precedencia
%right 'P_IGUAL'
%left  'P_OR'
%left  'P_AND'
%left  'P_IGUALACION' 'P_DIFERENTE' 'P_IGUALR'
%nonassoc  'P_POTENCIA' 
%left  'P_SUMA' 
%right 'P_RESTA'
%left  'P_MULTIPLICACION' 'P_DIVISION' 'P_MODULO'
%left 'P_MENOR' 'P_MENORIGUAL' 'P_MAYOR' 'P_MAYORIGUAL'
%right 'P_NOT' UMINUS


%start S

%%

//Definicion de gramatica

//$$    $1
S: SENTENCIAS EOF {$$=new AST_Node("RAIZ","RAIZ",this.$first_line,@1.last_column);$$.addChilds($1);return $$} ;


SENTENCIAS: SENTENCIAS SENTENCIA {$1.addChilds($2);$$=$1;}

            | SENTENCIA{$$= new AST_Node("SENTENCIAS","SENTENCIAS",this._$.first_line,@1.last_column);
                      $$.addChilds($1);} ;


SENTENCIA: DECLARACION_1 Tok_pyc{$$=$1}
           |ASIGNACION Tok_pyc{$$=$1}
           |BLOQUE{$$=$1}
           |IF{$$=$1}
           |WHILE{$$=$1}
           |DO_WHILE Tok_pyc{$$=$1}
           |PRINT{$$=$1};


DECLARACION_1: ID_LIST  {$$= new AST_Node("DECLARACION","DECLARACION",this._$.first_line,@1.first_column); $$.addChilds($1)};


ID_LIST: ID_LIST Tok_coma Tok_ID {$1.addChilds(new AST_Node("ID",$3,this._$.first_line,@3.first_column)); $$=$1;}
        | Tok_ID {$$= new AST_Node("ID_LIST","ID_LIST"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column))};


ASIGNACION: Tok_ID Tok_asigna1 EXP {$$=new AST_Node("ASIGNACION","ASIGNACION",this._$.first_line,@1.last_column); 
                                            $$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column),$3);};   

            

BLOQUE: Tok_llav1 SENTENCIAS Tok_llav2{$$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,@1.last_column); $$.addChilds($2)}
        |Tok_llav1 Tok_llav2{$$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,@1.last_column);};


IF: Tok_if Tok_par1 EXP Tok_par2 BLOQUE    {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column);$$.addChilds($3,$5)}
    |Tok_if Tok_par1 EXP Tok_par2 BLOQUE Tok_else BLOQUE {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column); var aux = new AST_Node("ELSE","ELSE",this._$.first_line,@6.last_column); aux.addChilds($7);$$.addChilds($3,$5,aux)};

WHILE: Tok_while Tok_par1 EXP Tok_par2 BLOQUE{$$=new AST_Node("WHILE","WHILE",this._$.first_line,@1.last_column); $$.addChilds($3,$5)};


DO_WHILE: Tok_do BLOQUE Tok_while Tok_par1 EXP Tok_par2 {$$=new AST_Node("DO_WHILE","DO_WHILE",this._$.first_line,@1.last_column);$$.addChilds($2,$5)};


PRINT: Tok_print Tok_par1 EXP Tok_par2 Tok_pyc {$$= new AST_Node("PRINT","PRINT",this._$.first_line,@1.last_column); $$.addChilds($3);};


EXP: EXP   P_SUMA    EXP                   {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_RESTA   EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_MULTIPLICACION   EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_DIVISION   EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_POTENCIA   EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_MODULO   EXP                   {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_DIFERENTE   EXP              {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_IGUALACION   EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_IGUALR   EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_MAYOR   EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_MENOR   EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_MAYORIGUAL   EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_MENORIGUAL   EXP                {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_AND   EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_OR   EXP                     {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |P_NOT   EXP                       {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds(new AST_Node("op",$1,this._$.first_line,@1.last_column),$2);}
    |P_PAR1   EXP   P_PAR2              {$$=$2}
    |Tok_string                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);
                                         var text = $1.substr(0,$1.length);
                                         text=text.replace(/\\n/g,"\n");
                                         text=text.replace(/\\t/g,"\t");
                                         text=text.replace(/\\r/g,"\r");
                                         text=text.replace(/\\\\/g,"\\");
                                         text=text.replace(/\\\"/g,"\"");
                                        $$.addChilds(new AST_Node("string",text,this._$.first_line,@1.last_column));}
    |P_NUMERO                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("numero",$1,this._$.first_line,@1.last_column));}
    |P_TRUE                           {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("true",$1,this._$.first_line,@1.last_column));}
    |P_FALSE                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("false",$1,this._$.first_line,@1.last_column));}
    |P_ID                            {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column));};

