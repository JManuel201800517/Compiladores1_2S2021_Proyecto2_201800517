// Parte lexica
%lex

%options case-insensitive

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
"typeof"            return 'P_TYPEOF'
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
"&"               return 'P_SAND'
"|"               return 'P_SOR'
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
//  "//"              return 'P_COMENTARIO'
"*/"              return 'P_COMENFINAL'


// Secuencias de escape

// "\n"        return  'P_SALTOLINEA'
// "\\"        return  'P_BARRAINVERTIDA'
// [\"]        return  'P_COMILLADOBLE';
// [\']        return  'P_COMILLASIMPLE';
//"\t"        return  'P_TABULACION'




// Expresiones Regulares

// ["]           return 'P_COMILLA';

// [']           return  'P_APOSTROFE';

[0-9]+("."[0-9]+)\b    return 'P_NUMERO';

[0-9]+                   return 'P_ENTERO';

([a-zA-Z_])[a-zA-Z0-9_]* return 'P_ID';



// Para char

[0-9]                   return 'P_ENT';

([a-zA-Z_])              return  'P_ALFABETO';

/* 
[P_ALFABETO|P_ENT|P_TABULACION|P_COMILLASIMPLE|P_COMILLADOBLE|P_BARRAINVERTIDA|P_SALTOLINEA|
P_PREGUNTA|P_DOSPUNTOS|P_PUNTOYCOMA|P_COMA|P_PUNTO|P_CORCHETE2|
  P_CORCHETE1|P_LLAVE2|P_LLAVE1|P_PAR2|P_PAR1|P_NOT|P_SAND|P_OR|P_MAYOR|P_MENOR|P_IGUAL|P_MODULO|
  P_POTENCIA|P_DIVISION|P_MULTIPLICACION|P_RESTA|P_SUMA]                                          return  'P_CARACTERP';



[P_ALFABETO|P_ENT|P_TABULACION|P_COMILLASIMPLE|P_COMILLADOBLE|P_BARRAINVERTIDA|P_SALTOLINEA|
P_PREGUNTA|P_DOSPUNTOS|P_PUNTOYCOMA|P_COMA|P_PUNTO|P_CORCHETE2|
  P_CORCHETE1|P_LLAVE2|P_LLAVE1|P_PAR2|P_PAR1|P_NOT|P_SAND|P_OR|P_MAYOR|P_MENOR|P_IGUAL|P_MODULO|
  P_POTENCIA|P_DIVISION|P_MULTIPLICACION|P_RESTA|P_SUMA|P_AND|P_OR|P_MAYORIGUAL|P_MENORIGUAL|P_DIFERENTE|
  P_IGUALACION|P_FALSE|P_TRUE|P_WITH|P_START|P_TOCHARARRAY|P_TOSTRING|P_TYPEOF|P_ROUND|P_TRUNCATE|
  P_LENGHT|P_TOUPPER|P_TOLOWER|P_WRITELINE|P_VOID|P_RETURN|P_CONTINUE|P_DO|P_FOR|P_WHILE|P_BREAK|
  P_DEFAULT|P_CASE|P_SWITCH|P_ELSE|P_IF|P_SETVALUE|P_GETVALUE|P_APPEND|P_DYNAMICLIST|P_NEW|
  P_STRING|P_CHAR|P_BOOLEAN|P_DOUBLE|P_INT]*                                                 return  'P_TODO';

  */


\"[^\"]*\"              { yytext = yytext.substr(1,yyleng-2); return 'P_CADENA'; }

\'[^\"]?\'              { yytext = yytext.substr(1,yyleng-2); return 'P_CARACTER'; }






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

%left  'P_OR'
%left  'P_AND'
%right 'P_NOT' UMINUS
%right 'P_IGUAL'
%left 'P_MENOR' 'P_MENORIGUAL' 'P_MAYOR' 'P_MAYORIGUAL' 'P_IGUALACION' 'P_DIFERENTE' 'P_IGUALR'
%left  'P_SUMA' 'P_RESTA'
%left  'P_MULTIPLICACION' 'P_DIVISION' 'P_MODULO'
%nonassoc  'P_POTENCIA' 
%right 'P_RESTA'


%start S

%%

//Definicion de gramatica

//$$    $1
S: SENTENCIAS EOF  {$$=new AST_Node("RAIZ","RAIZ",this.$first_line,@1.last_column);$$.addChilds($1);return $$} ;




SENTENCIAS: SENTENCIAS SENTENCIA  {$1.addChilds($2);$$=$1;}
            |SENTENCIA  {$$= new AST_Node("SENTENCIAS","SENTENCIAS",this._$.first_line,@1.last_column);
                        $$.addChilds($1);};




SENTENCIA:  P_INT    VARINT   P_PUNTOYCOMA   {$$=$2}
           | P_DOUBLE    VARDOUBLE   P_PUNTOYCOMA   {$$=$2}
           | P_BOOLEAN    VARBOOLEAN   P_PUNTOYCOMA   {$$=$2}
           | P_STRING    VARSTRING   P_PUNTOYCOMA   {$$=$2}
           | P_CHAR    VARCHAR   P_PUNTOYCOMA   {$$=$2}
           |COMENTARIOS   {$$=$1}
           | P_INT    VECTORINT   P_PUNTOYCOMA   {$$=$2}
           | P_STRING    VECTORSTRING  P_PUNTOYCOMA   {$$=$2}
           | P_CHAR    VECTORCHAR  P_PUNTOYCOMA   {$$=$2}
           | P_BOOLEAN    VECTORBOOLEAN  P_PUNTOYCOMA   {$$=$2}
           | P_DOUBLE    VECTORDOUBLE  P_PUNTOYCOMA   {$$=$2}
           | P_DYNAMICLIST   P_MENOR  P_INT  P_MAYOR  LISTINT    P_PUNTOYCOMA  {$$=$5}
           | P_DYNAMICLIST   P_MENOR  P_STRING  P_MAYOR  LISTSTRING   P_PUNTOYCOMA  {$$=$5}
           | P_DYNAMICLIST   P_MENOR  P_CHAR  P_MAYOR  LISTCHAR    P_PUNTOYCOMA  {$$=$5}
           | P_DYNAMICLIST   P_MENOR  P_BOOLEAN  P_MAYOR  LISTBOOLEAN   P_PUNTOYCOMA  {$$=$5}
           | P_DYNAMICLIST   P_MENOR  P_DOUBLE  P_MAYOR  LISTDOUBLE    P_PUNTOYCOMA  {$$=$5}
           |IF           {$$=$1}
           |SWITCH        {$$=$1}
           |BREAK    P_PUNTOYCOMA   {$$=$1}
           |WHILE                    {$$=$1}
           |FOR                     {$$=$1}
           |INCRE_DECRE  P_PUNTOYCOMA          {$$=$1}
           |DO_WHILE   P_PUNTOYCOMA      {$$=$1}
           |CONTINUE   P_PUNTOYCOMA      {$$=$1}
           |RETURN   P_PUNTOYCOMA        {$$=$1}
           |FUNCIONES                  {$$=$1}
           |METODOS                    {$$=$1}
           |WRITE    P_PUNTOYCOMA      {$$=$1}
           |START   P_PUNTOYCOMA        {$$=$1}
           |TERNARIO    P_PUNTOYCOMA    {$$=$1}
           |DECLARACION  P_PUNTOYCOMA     {$$=$1}
           |DECLA_VECTOR  P_PUNTOYCOMA     {$$=$1}
           |APPENDLISTA  P_PUNTOYCOMA       {$$=$1}
           |GETVAL    P_PUNTOYCOMA         {$$=$1}
           |SETVAL   P_PUNTOYCOMA          {$$=$1}
           |LLAMADA    P_PUNTOYCOMA       {$$=$1}   ;



LISTINT: LISTAINT  {$$= new AST_Node("DECLARACION LISTA INT","DECLARACION LISTA INT",this._$.first_line,@1.first_column); $$.addChilds($1)};

LISTSTRING: LISTASTRING  {$$= new AST_Node("DECLARACION LISTA STRING","DECLARACION LISTA STRING",this._$.first_line,@1.first_column); $$.addChilds($1)} ;

LISTCHAR: LISTACHAR  {$$= new AST_Node("DECLARACION LISTA CHAR","DECLARACION LISTA CHAR",this._$.first_line,@1.first_column); $$.addChilds($1)} 
          | LISTACHAR1  {$$= new AST_Node("ARREGLO LISTA CHAR","ARREGLO LISTA CHAR",this._$.first_line,@1.first_column); $$.addChilds($1)} ;

LISTBOOLEAN:   LISTABOOLEAN   {$$= new AST_Node("DECLARACION LISTA BOOLEAN","DECLARACION LISTA BOOLEAN",this._$.first_line,@1.first_column); $$.addChilds($1)};

LISTDOUBLE:  LISTADOUBLE  {$$= new AST_Node("DECLARACION LISTA DOUBLE","DECLARACION LISTA DOUBLE",this._$.first_line,@1.first_column); $$.addChilds($1)};
          


FUNCIONES:  P_INT   P_ID   PARAMETROS   BLOQUE  
            |P_STRING   P_ID   PARAMETROS   BLOQUE  
            |P_CHAR   P_ID   PARAMETROS   BLOQUE  
            |P_BOOLEAN   P_ID   PARAMETROS   BLOQUE  
            |P_DOUBLE   P_ID   PARAMETROS   BLOQUE   ;


METODOS: P_VOID  P_ID  PARAMETROS   BLOQUE   ;



PARAMETROS:  P_PAR1   TIPOPARAMETRO   P_PAR2
             |P_PAR1     P_PAR2   ;


TIPOPARAMETRO:  TIPOPARAMETRO   P_COMA   TIPO   P_ID
                |TIPO   P_ID   ;


TIPO: P_INT
      |P_STRING
      |P_CHAR
      |P_BOOLEAN
      |P_DOUBLE    ;


LLAMADA:  P_ID  P_PAR1  P_PAR2  
          |P_ID  P_PAR1  PARALLAMADA  P_PAR2  ;


PARALLAMADA:  PARALLAMADA  P_COMA  EXP
              |EXP    ;


COMENTARIOS: P_COMENINICIO   EXP    P_COMENFINAL; 




VECTORINT:   VECINT   {$$= new AST_Node("DECLARACION VECTOR INT","DECLARACION VECTOR INT",this._$.first_line,@1.first_column); $$.addChilds($1)}
           | VECINT1  {$$= new AST_Node("ASIGNACION VECTOR INT","ASIGNACION VECTOR INT",this._$.first_line,@1.first_column); $$.addChilds($1)};


VECINT:   P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  P_NEW  P_INT  P_CORCHETE1   P_ENTERO   P_CORCHETE2  {$$= new AST_Node("VECTOR INT","VECTOR INT"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$8);} ;

VECINT1:  P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  P_LLAVE1   VALORESINT  P_LLAVE2   {$$= new AST_Node("VECTOR INT","VECTOR INT"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$6);};

VALORESINT: VALORESINT   P_COMA   EXP  {$1.addChilds($3); $$=$1;}
           | EXP                       {$$= new AST_Node("EXPRESION","EXPRESION"); $$.addChilds($1)} ;


VECTORSTRING: VECSTRING  {$$= new AST_Node("DECLARACION VECTOR STRING","DECLARACION VECTOR STRING",this._$.first_line,@1.first_column); $$.addChilds($1)}
           | VECSTRING1  {$$= new AST_Node("ASIGNACION VECTOR STRING","ASIGNACION VECTOR STRING",this._$.first_line,@1.first_column); $$.addChilds($1)};

VECSTRING:  P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  P_NEW  P_STRING  P_CORCHETE1   P_ENTERO   P_CORCHETE2 {$$= new AST_Node("VECTOR STRING","VECTOR STRING"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$8);} ;

VECSTRING1: P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  P_LLAVE1   VALORESSTRING  P_LLAVE2   {$$= new AST_Node("VECTOR STRING","VECTOR STRING"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$6);};

VALORESSTRING: VALORESSTRING   P_COMA    EXP  {$1.addChilds($3); $$=$1;}
           |   EXP     {$$= new AST_Node("EXPRESION","EXPRESION"); $$.addChilds($1)};



VECTORCHAR:  VECCHAR {$$= new AST_Node("DECLARACION VECTOR CHAR","DECLARACION VECTOR CHAR",this._$.first_line,@1.first_column); $$.addChilds($1)}
           | VECCHAR1  {$$= new AST_Node("ASIGNACION VECTOR CHAR","ASIGNACION VECTOR CHAR",this._$.first_line,@1.first_column); $$.addChilds($1)};


VECCHAR: P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  P_NEW  P_CHAR  P_CORCHETE1   P_ENTERO   P_CORCHETE2  {$$= new AST_Node("VECTOR CHAR","VECTOR CHAR"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$8);} ;

VECCHAR1: P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL   P_LLAVE1   VALORESCHAR  P_LLAVE2    {$$= new AST_Node("VECTOR CHAR","VECTOR CHAR"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$6);};

VALORESCHAR: VALORESCHAR   P_COMA     EXP   {$1.addChilds($3); $$=$1;} 
           |   EXP  {$$= new AST_Node("EXPRESION","EXPRESION"); $$.addChilds($1)};



VECTORBOOLEAN: VECBOOLEAN {$$= new AST_Node("DECLARACION VECTOR BOOLEAN","DECLARACION VECTOR BOOLEAN",this._$.first_line,@1.first_column); $$.addChilds($1)}
           | VECBOOLEAN1  {$$= new AST_Node("ASIGNACION VECTOR BOOLEAN","ASIGNACION VECTOR BOOLEAN",this._$.first_line,@1.first_column); $$.addChilds($1)};

VECBOOLEAN: P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL   P_NEW  P_BOOLEAN  P_CORCHETE1   P_ENTERO   P_CORCHETE2 {$$= new AST_Node("VECTOR BOOLEAN","VECTOR BOOLEAN"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$8);} ;

VECBOOLEAN1:  P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL   P_LLAVE1   VALORESBOOLEAN  P_LLAVE2  {$$= new AST_Node("VECTOR BOOLEAN","VECTOR BOOLEAN"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$6);};

VALORESBOOLEAN: VALORESBOOLEAN   P_COMA    EXP  {$1.addChilds($3); $$=$1;} 
           | EXP  {$$= new AST_Node("EXPRESION","EXPRESION"); $$.addChilds($1)};


VECTORDOUBLE: VECDOUBLE {$$= new AST_Node("DECLARACION VECTOR DOUBLE","DECLARACION VECTOR DOUBLE",this._$.first_line,@1.first_column); $$.addChilds($1)}
           | VECDOUBLE1  {$$= new AST_Node("ASIGNACION VECTOR DOUBLE","ASIGNACION VECTOR DOUBLE",this._$.first_line,@1.first_column); $$.addChilds($1)};


VECDOUBLE:  P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  P_NEW  P_DOUBLE  P_CORCHETE1   P_ENTERO   P_CORCHETE2  {$$= new AST_Node("VECTOR DOUBLE","VECTOR DOUBLE"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$8);} ;


VECDOUBLE1: P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  P_LLAVE1   VALORESDOUBLE  P_LLAVE2   {$$= new AST_Node("VECTOR DOUBLE","VECTOR DOUBLE"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$6);};

VALORESDOUBLE: VALORESDOUBLE   P_COMA   EXP   {$1.addChilds($3); $$=$1;} 
           | EXP   {$$= new AST_Node("EXPRESION","EXPRESION"); $$.addChilds($1)};




VARINT:   VARIABLEINT   {$$= new AST_Node("DECLARACION INT","DECLARACION INT",this._$.first_line,@1.first_column); $$.addChilds($1)}
         |VARIABLEINT1  {$$= new AST_Node("ASIGNACION INT","ASIGNACION INT",this._$.first_line,@1.first_column); $$.addChilds($1)}
         |VARIABLEINT2  {$$= new AST_Node("LENGHT INT","LENGHT INT",this._$.first_line,@1.first_column); $$.addChilds($1)}
         |VARIABLEINT3  {$$= new AST_Node("TRUNCATE INT","TRUNCATE INT",this._$.first_line,@1.first_column); $$.addChilds($1)}
         |VARIABLEINT4  {$$= new AST_Node("CASTEO INT","CASTEO INT",this._$.first_line,@1.first_column); $$.addChilds($1)};

VARIABLEINT: P_ID  P_COMA  VARIABLEINT     {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID                           {$$= new AST_Node("VARIABLE INT","VARIABLE INT"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column))} ;

VARIABLEINT1: P_ID  P_COMA  VARIABLEINT1     {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID  P_IGUAL    EXP           {$$= new AST_Node("VARIABLE INT","VARIABLE INT"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$3);} ;

VARIABLEINT2: P_ID  P_COMA  VARIABLEINT2     {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
           | P_ID  P_IGUAL  P_LENGHT  P_PAR1  EXP  P_PAR2  {$$= new AST_Node("VARIABLE INT","VARIABLE INT"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$5);};

VARIABLEINT3: P_ID  P_COMA  VARIABLEINT3     {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
           | P_ID  P_IGUAL  P_TRUNCATE  P_PAR1  EXP  P_PAR2  {$$= new AST_Node("VARIABLE INT","VARIABLE INT"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$5);};

VARIABLEINT4: P_ID  P_COMA  VARIABLEINT4     {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
           | P_ID  P_IGUAL  P_PAR1  P_INT  P_PAR2  EXP  {$$= new AST_Node("VARIABLE INT","VARIABLE INT"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$6);};


DECI: P_NUMERO
      |P_ID  ;



VARDOUBLE: VARIABLEDOUBLE  {$$= new AST_Node("DECLARACION DOUBLE","DECLARACION DOUBLE",this._$.first_line,@1.first_column); $$.addChilds($1)}
         | VARIABLEDOUBLE1  {$$= new AST_Node("ASIGNACION DOUBLE","ASIGNACION DOUBLE",this._$.first_line,@1.first_column); $$.addChilds($1)}
         | VARIABLEDOUBLE2  {$$= new AST_Node("CASTEO DOUBLE","CASTEO DOUBLE",this._$.first_line,@1.first_column); $$.addChilds($1)}
         | VARIABLEDOUBLE3  {$$= new AST_Node("ROUND DOUBLE","ROUND DOUBLE",this._$.first_line,@1.first_column); $$.addChilds($1)};


VARIABLEDOUBLE:  P_ID  P_COMA    VARIABLEDOUBLE  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID                                 {$$= new AST_Node("VARIABLE DOUBLE","VARIABLE DOUBLE"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column))} ;


VARIABLEDOUBLE1:  P_ID  P_COMA    VARIABLEDOUBLE1  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID   P_IGUAL    EXP                  {$$= new AST_Node("VARIABLE DOUBLE","VARIABLE DOUBLE"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$3);};
 


VARIABLEDOUBLE2:  P_ID  P_COMA    VARIABLEDOUBLE2            {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID P_IGUAL  P_PAR1  P_DOUBLE  P_PAR2  EXP    {$$= new AST_Node("VARIABLE DOUBLE","VARIABLE DOUBLE"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$6);} ;



VARIABLEDOUBLE3:  P_ID  P_COMA    VARIABLEDOUBLE3            {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID  P_IGUAL  P_ROUND  P_PAR1   EXP   P_PAR2    {$$= new AST_Node("VARIABLE DOUBLE","VARIABLE DOUBLE"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$5);}  ;




VARBOOLEAN:  VARIABLEBOOLEAN     {$$= new AST_Node("DECLARACION BOOLEAN","DECLARACION BOOLEAN",this._$.first_line,@1.first_column); $$.addChilds($1)}
             | VARIABLEBOOLEAN1  {$$= new AST_Node("ASIGNACION BOOLEAN","ASIGNACION BOOLEAN",this._$.first_line,@1.first_column); $$.addChilds($1)};

VARIABLEBOOLEAN:  P_ID  P_COMA    VARIABLEBOOLEAN    {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
                  | P_ID                             {$$= new AST_Node("VARIABLE BOOLEAN","VARIABLE BOOLEAN"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column))} ;

VARIABLEBOOLEAN1:  P_ID  P_COMA    VARIABLEBOOLEAN1   {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
                 | P_ID  P_IGUAL    EXP               {$$= new AST_Node("VARIABLE BOOLEAN","VARIABLE BOOLEAN"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$3);};

TRUEFALSE: P_TRUE
          |P_FALSE   ;




VARSTRING:     VARIABLESTRING      {$$= new AST_Node("DECLARACION STRING","DECLARACION STRING",this._$.first_line,@1.first_column); $$.addChilds($1)}
             | VARIABLESTRING1     {$$= new AST_Node("ASIGNACION STRING","ASIGNACION STRING",this._$.first_line,@1.first_column); $$.addChilds($1)}
             | VARIABLESTRING2   {$$= new AST_Node("TOLOWER STRING","TOLOWER STRING",this._$.first_line,@1.first_column); $$.addChilds($1)}
             | VARIABLESTRING3   {$$= new AST_Node("TOUPPER STRING","TOUPPER STRING",this._$.first_line,@1.first_column); $$.addChilds($1)}
             | VARIABLESTRING4   {$$= new AST_Node("TYPEOF STRING","TYPEOF STRING",this._$.first_line,@1.first_column); $$.addChilds($1)}
             | VARIABLESTRING5   {$$= new AST_Node("TOSTRING STRING","TOSTRING STRING",this._$.first_line,@1.first_column); $$.addChilds($1)};

VARIABLESTRING:  P_ID  P_COMA    VARIABLESTRING {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
                | P_ID                          {$$= new AST_Node("VARIABLE STRING","VARIABLE STRING"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column))} ;


VARIABLESTRING1:  P_ID  P_COMA    VARIABLESTRING1  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID  P_IGUAL   EXP  {$$= new AST_Node("VARIABLE STRING","VARIABLE STRING"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$3);};


VARIABLESTRING2:  P_ID  P_COMA    VARIABLESTRING2  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID  P_IGUAL  P_TOLOWER  P_PAR1  EXP  P_PAR2  {$$= new AST_Node("VARIABLE STRING","VARIABLE STRING"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$5);};

VARIABLESTRING3:  P_ID  P_COMA    VARIABLESTRING3  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID  P_IGUAL   P_TOUPPER  P_PAR1  EXP  P_PAR2   {$$= new AST_Node("VARIABLE STRING","VARIABLE STRING"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$5);};

VARIABLESTRING4:  P_ID  P_COMA    VARIABLESTRING4  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID  P_IGUAL   P_TYPEOF  P_PAR1  EXP  P_PAR2   {$$= new AST_Node("VARIABLE STRING","VARIABLE STRING"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$5);};

VARIABLESTRING5:  P_ID  P_COMA    VARIABLESTRING5  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID  P_IGUAL   P_TOSTRING  P_PAR1  EXP  P_PAR2   {$$= new AST_Node("VARIABLE STRING","VARIABLE STRING"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$5);};


TEXT: P_NUMERO
      |TRUEFALSE   ;



VARCHAR:   VARIABLECHAR      {$$= new AST_Node("DECLARACION CHAR","DECLARACION CHAR",this._$.first_line,@1.first_column); $$.addChilds($1)}
         | VARIABLECHAR1     {$$= new AST_Node("ASIGNACION CHAR","ASIGNACION CHAR",this._$.first_line,@1.first_column); $$.addChilds($1)}
         | VARIABLECHAR2    {$$= new AST_Node("CASTEO CHAR","CASTEO CHAR",this._$.first_line,@1.first_column); $$.addChilds($1)} ;

VARIABLECHAR:  P_ID   P_COMA     VARIABLECHAR  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID    {$$= new AST_Node("VARIABLE CHAR","VARIABLE CHAR"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column))} ;

VARIABLECHAR1:  P_ID   P_COMA     VARIABLECHAR1  {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID   P_IGUAL   EXP                 {$$= new AST_Node("VARIABLE CHAR","VARIABLE CHAR"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$3);};

VARIABLECHAR2:  P_ID   P_COMA     VARIABLECHAR2           {$3.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column)); $$=$3;}
          | P_ID  P_IGUAL  P_PAR1  P_CHAR  P_PAR2  EXP    {$$= new AST_Node("VARIABLE CHAR","VARIABLE CHAR"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column),$6);} ;



DECLARACION:  P_ID   P_IGUAL   EXP 
              |P_ID   P_IGUAL  P_PAR1   TIPO  P_PAR2  EXP
              |P_ID  P_COMA  DECLARACION  
              |P_ID   P_IGUAL  P_LENGHT  P_PAR1  EXP  P_PAR2  
              |P_ID   P_IGUAL  P_TRUNCATE  P_PAR1  EXP  P_PAR2 
              |P_ID   P_IGUAL  P_ROUND  P_PAR1   EXP   P_PAR2  
              |P_ID MAYMEN;



 
LISTAINT:   P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_INT  P_MAYOR  ;

LISTASTRING:    P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_STRING  P_MAYOR  ;

LISTACHAR:   P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_CHAR  P_MAYOR ;  

LISTACHAR1:   P_ID   P_IGUAL   P_TOCHARARRAY    P_PAR1   EXP  P_PAR2  ;

LISTABOOLEAN:    P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_BOOLEAN  P_MAYOR  ;

LISTADOUBLE:    P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_DOUBLE  P_MAYOR  ;


APPENDLISTA:  P_APPEND  P_PAR1   P_ID   P_COMA  EXP  P_PAR2  ;


IF: P_IF   P_PAR1    EXP    P_PAR2  BLOQUE   {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column);$$.addChilds($3,$5)}
    |P_IF   P_PAR1    EXP    P_PAR2  BLOQUE  P_ELSE  ELSE  {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column); var aux = new AST_Node("ELSE","ELSE",this._$.first_line,@6.last_column); aux.addChilds($7);$$.addChilds($3,$5,aux)};


ELSE:   IF
       |BLOQUE   ;



SWITCH: P_SWITCH   P_PAR1   EXP   P_PAR2  BLOQUESWITCH   ;


BLOQUESWITCH: P_LLAVE1     P_LLAVE2
              |P_LLAVE1    LISTCASE      P_LLAVE2  ;


LISTCASE: P_CASE   EXP   BSW    LISTCASE
          |P_CASE   EXP   BSW
          |P_DEFAULT   BSW  ;


BSW:  P_DOSPUNTOS SENTENCIAS 
      |P_DOSPUNTOS ;


BREAK: P_BREAK  ;


CONTINUE: P_CONTINUE     ;


RETURN: P_RETURN
        |P_RETURN   EXP   ;


WHILE: P_WHILE   P_PAR1  EXP   P_PAR2   BLOQUE  {$$=new AST_Node("WHILE","WHILE",this._$.first_line,@1.last_column); $$.addChilds($3,$5)};

FOR: P_FOR   P_PAR1   ASIG_DEC    P_PUNTOYCOMA     EXP    P_PUNTOYCOMA   EXP    P_PAR2   BLOQUE;


ASIG_DEC:  P_INT   P_ID   P_IGUAL   EXP   
           |P_ID   P_IGUAL   EXP    ;


INCRE_DECRE:  P_ID   P_SUMA  P_SUMA   {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2+$3,this._$.first_line,@2.last_column),$3);}
              |P_ID  P_RESTA  P_RESTA   {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2+$3,this._$.first_line,@2.last_column),$3);};


DO_WHILE: P_DO   BLOQUE    P_WHILE   P_PAR1    EXP    P_PAR2  {$$=new AST_Node("DO_WHILE","DO_WHILE",this._$.first_line,@1.last_column);$$.addChilds($2,$5)} ;


BLOQUE: P_LLAVE1     SENTENCIAS    P_LLAVE2  {$$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,@1.last_column); $$.addChilds($2)}
        |P_LLAVE1   P_LLAVE2   {$$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,@1.last_column);} ;



WRITE:  P_WRITELINE  P_PAR1     EXP    P_PAR2   {$$= new AST_Node("WRITELINE","WRITELINE",this._$.first_line,@1.last_column); $$.addChilds($3);};


START: P_START  P_WITH    P_ID   VALUE   ;

VALUE:  P_PAR1    LISTVALUE   P_PAR2   
        |P_PAR1   P_PAR2   ;

LISTVALUE:  LISTVALUE   P_COMA   EXP
            |EXP        ;            


TERNARIO: P_ID  P_IGUAL  EXP   P_PREGUNTA  EXP    P_DOSPUNTOS      EXP  ;


DECLA_VECTOR:  P_ID  P_CORCHETE1  P_ENTERO  P_CORCHETE2   P_IGUAL   EXP 
              |P_ID  P_CORCHETE1  P_ENTERO  P_CORCHETE2   P_IGUAL  P_PAR1   TIPO  P_PAR2   EXP
              |P_ID  P_CORCHETE1  P_ENTERO  P_CORCHETE2   P_COMA  DECLA_VECTOR ; 

GETVAL: P_GETVALUE   P_PAR1   P_ID  P_COMA   EXP   P_PAR2  ;


SETVAL: P_SETVALUE  P_PAR1  P_ID   P_COMA  EXP  P_COMA  EXP  P_PAR2  ;


EXP: EXP P_SUMA EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_RESTA EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_MULTIPLICACION EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_DIVISION EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_POTENCIA EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_MODULO EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_DIFERENTE EXP              {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_IGUALACION EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_IGUALR EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_MAYOR EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_MENOR EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_MAYORIGUAL EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_MENORIGUAL EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_AND EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP P_OR EXP                     {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |P_NOT EXP                        {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds(new AST_Node("op",$1,this._$.first_line,@1.last_column),$2);}
    |P_PAR1 EXP P_PAR2             {$$=$2}
    |P_CADENA                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);
                                         var text = $1.substr(0,$1.length);
                                         text=text.replace(/\\n/g,"\n");
                                         text=text.replace(/\\t/g,"\t");
                                         text=text.replace(/\\r/g,"\r");
                                         text=text.replace(/\\\\/g,"\\");
                                         text=text.replace(/\\\"/g,"\"");
                                         text=text.replace(/\\\'/g,"\'");
                                        $$.addChilds(new AST_Node("string",text,this._$.first_line,@1.last_column));}
    |P_NUMERO                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("numero",$1,this._$.first_line,@1.last_column));}
    |P_ENTERO                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("entero",$1,this._$.first_line,@1.last_column));}
    |P_TRUE                          {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("true",$1,this._$.first_line,@1.last_column));}
    |P_FALSE                        {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("false",$1,this._$.first_line,@1.last_column));}
    |P_ID                            {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column));}
    |P_RESTA  EXP                   {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds(new AST_Node("op",$1,this._$.first_line,@1.last_column),$2);}
    |EXP  P_SUMA  P_SUMA            {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2+$3,this._$.first_line,@2.last_column),$3);}
    |EXP   P_RESTA  P_RESTA          {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2+$3,this._$.first_line,@2.last_column),$3);}
    |P_CARACTER                      {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);
                                         var text = $1.substr(0,$1.length);
                                         text=text.replace(/\\n/g,"\n");
                                         text=text.replace(/\\t/g,"\t");
                                         text=text.replace(/\\r/g,"\r");
                                         text=text.replace(/\\\\/g,"\\");
                                         text=text.replace(/\\\"/g,"\"");
                                         text=text.replace(/\\\'/g,"\'");
                                        $$.addChilds(new AST_Node("char",text,this._$.first_line,@1.last_column));} 
    |P_ID  P_CORCHETE1   P_ENTERO  P_CORCHETE2   {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("elemento",$1+"["+$3+"]",this._$.first_line,@1.last_column));}
    |GETVAL    {$$=$1}
    |LLAMADA   {$$=$1};                
           
