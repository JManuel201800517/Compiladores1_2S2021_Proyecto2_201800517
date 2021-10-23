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

"\n"        return  'P_SALTOLINEA'
"\\"        return  'P_BARRAINVERTIDA'
[\"]        return  'P_COMILLADOBLE';
[\']        return  'P_COMILLASIMPLE';
"\t"        return  'P_TABULACION'




// Expresiones Regulares

// ["]           return 'P_COMILLA';

// [']           return  'P_APOSTROFE';

[0-9]+("."[0-9]+)?\b    return 'P_NUMERO';

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

*/

[P_ALFABETO|P_ENT|P_TABULACION|P_COMILLASIMPLE|P_COMILLADOBLE|P_BARRAINVERTIDA|P_SALTOLINEA|
P_PREGUNTA|P_DOSPUNTOS|P_PUNTOYCOMA|P_COMA|P_PUNTO|P_CORCHETE2|
  P_CORCHETE1|P_LLAVE2|P_LLAVE1|P_PAR2|P_PAR1|P_NOT|P_SAND|P_OR|P_MAYOR|P_MENOR|P_IGUAL|P_MODULO|
  P_POTENCIA|P_DIVISION|P_MULTIPLICACION|P_RESTA|P_SUMA|P_AND|P_OR|P_MAYORIGUAL|P_MENORIGUAL|P_DIFERENTE|
  P_IGUALACION|P_FALSE|P_TRUE|P_WITH|P_START|P_TOCHARARRAY|P_TOSTRING|P_TYPEOF|P_ROUND|P_TRUNCATE|
  P_LENGHT|P_TOUPPER|P_TOLOWER|P_WRITELINE|P_VOID|P_RETURN|P_CONTINUE|P_DO|P_FOR|P_WHILE|P_BREAK|
  P_DEFAULT|P_CASE|P_SWITCH|P_ELSE|P_IF|P_SETVALUE|P_GETVALUE|P_APPEND|P_DYNAMICLIST|P_NEW|
  P_STRING|P_CHAR|P_BOOLEAN|P_DOUBLE|P_INT]*                                                 return  'P_TODO';


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




SENTENCIA: VARIABLES      
           |COMENTARIOS   {$$=$1}
           |VECTORES      
           |LISTAS        
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




VARIABLES: VARINT    P_PUNTOYCOMA        {$$=$1}       
           |VARDOUBLE  P_PUNTOYCOMA      {$$=$1}
           |VARBOOLEAN    P_PUNTOYCOMA    {$$=$1}
           |VARCHAR        P_PUNTOYCOMA    {$$=$1}
           |VARSTRING    P_PUNTOYCOMA      {$$=$1} ;


VECTORES:  VECTORINT   P_PUNTOYCOMA       {$$=$1}
           |VECTORSTRING   P_PUNTOYCOMA   {$$=$1}
           |VECTORCHAR     P_PUNTOYCOMA   {$$=$1}
           |VECTORBOOLEAN   P_PUNTOYCOMA   {$$=$1}
           |VECTORDOUBLE     P_PUNTOYCOMA   {$$=$1}  ;

LISTAS: LISTAINT  P_PUNTOYCOMA         {$$=$1}
        |LISTASTRING   P_PUNTOYCOMA    {$$=$1}
        |LISTACHAR   P_PUNTOYCOMA       {$$=$1}
        |LISTABOOLEAN   P_PUNTOYCOMA       {$$=$1}
        |LISTADOUBLE   P_PUNTOYCOMA        {$$=$1}  ;


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


COMENTARIOS: P_COMENINICIO   P_TODO    P_COMENFINAL; 


VECTORINT: P_INT   P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  VECINT;

VECINT: P_NEW  P_INT  P_CORCHETE1   P_ENTERO   P_CORCHETE2   
        |P_LLAVE1   VALORESINT  P_LLAVE2   ;

VALORESINT: VALORESINT   P_COMA   EXP
           | EXP;


VECTORSTRING: P_STRING   P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  VECSTRING;

VECSTRING: P_NEW  P_STRING  P_CORCHETE1   P_ENTERO   P_CORCHETE2   
        |P_LLAVE1   VALORESSTRING  P_LLAVE2   ;

VALORESSTRING: VALORESSTRING   P_COMA    EXP
           |   EXP  ;



VECTORCHAR: P_CHAR   P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  VECCHAR;

VECCHAR: P_NEW  P_CHAR  P_CORCHETE1   P_ENTERO   P_CORCHETE2   
        |P_LLAVE1   VALORESCHAR  P_LLAVE2   ;

VALORESCHAR: VALORESCHAR   P_COMA     EXP   
           |   EXP  ;


VECTORBOOLEAN: P_BOOLEAN   P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  VECBOOLEAN;

VECBOOLEAN: P_NEW  P_BOOLEAN  P_CORCHETE1   P_ENTERO   P_CORCHETE2   
        |P_LLAVE1   VALORESBOOLEAN  P_LLAVE2   ;

VALORESBOOLEAN: VALORESBOOLEAN   P_COMA    EXP
           | EXP;


VECTORDOUBLE: P_DOUBLE   P_ID   P_CORCHETE1  P_CORCHETE2  P_IGUAL  VECDOUBLE;

VECDOUBLE: P_NEW  P_DOUBLE  P_CORCHETE1   P_ENTERO   P_CORCHETE2   
        |P_LLAVE1   VALORESDOUBLE  P_LLAVE2   ;

VALORESDOUBLE: VALORESDOUBLE   P_COMA   EXP
           | EXP;




VARINT:  P_INT   P_ID    VARIABLEINT ;

VARIABLEINT:  P_COMA    P_ID   VARIABLEINT
          | P_ID 
          | P_IGUAL    EXP  
          | P_IGUAL  P_PAR1  P_INT  P_PAR2  EXP 
          | P_IGUAL  P_LENGHT  P_PAR1  EXP  P_PAR2  
          | P_IGUAL  P_TRUNCATE  P_PAR1  EXP  P_PAR2   ;

DECI: P_NUMERO
      |P_ID  ;



VARDOUBLE:  P_DOUBLE   P_ID    VARIABLEDOUBLE ;

VARIABLEDOUBLE:  P_COMA    P_ID   VARIABLEDOUBLE
          | P_ID
          | P_IGUAL    EXP 
          | P_IGUAL  P_PAR1  P_DOUBLE  P_PAR2  EXP
          | P_IGUAL  P_ROUND  P_PAR1   EXP   P_PAR2;



VARBOOLEAN:  P_BOOLEAN   P_ID    VARIABLEBOOLEAN ;

VARIABLEBOOLEAN:  P_COMA    P_ID   VARIABLEBOOLEAN
          | P_ID 
          | P_IGUAL    EXP  ;

TRUEFALSE: P_TRUE
          |P_FALSE   ;



VARSTRING:  P_STRING   P_ID    VARIABLESTRING ;

VARIABLESTRING:  P_COMA    P_ID   VARIABLESTRING
          | P_ID 
          | P_IGUAL   EXP  
          | P_IGUAL  MAYMEN;

MAYMEN: P_TOLOWER  P_PAR1  EXP  P_PAR2
        |P_TOUPPER  P_PAR1   EXP  P_PAR2  
        |P_TYPEOF  P_PAR1   EXP   P_PAR2
        |P_TOSTRING  P_PAR1   EXP  P_PAR2;

TEXT: P_NUMERO
      |TRUEFALSE   ;



VARCHAR:  P_CHAR   P_ID    VARIABLECHAR ;

VARIABLECHAR:  P_COMA    P_ID   VARIABLECHAR
          | P_ID
          | P_IGUAL   EXP 
          | P_IGUAL  P_PAR1  P_CHAR  P_PAR2  EXP;



DECLARACION:  P_ID   P_IGUAL   EXP 
              |P_ID   P_IGUAL  P_PAR1   TIPO  P_PAR2  EXP
              |P_ID  P_COMA  DECLARACION  ; 


 
LISTAINT: P_DYNAMICLIST   P_MENOR  P_INT  P_MAYOR   P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_INT  P_MAYOR  ;

LISTASTRING: P_DYNAMICLIST   P_MENOR  P_STRING  P_MAYOR   P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_STRING  P_MAYOR  ;

LISTACHAR: P_DYNAMICLIST   P_MENOR  P_CHAR  P_MAYOR   P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_CHAR  P_MAYOR 
           |P_DYNAMICLIST   P_MENOR  P_CHAR  P_MAYOR   P_ID   P_IGUAL   P_TOCHARARRAY    P_PAR1   EXP  P_PAR2  ;

LISTABOOLEAN: P_DYNAMICLIST   P_MENOR  P_BOOLEAN  P_MAYOR   P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_BOOLEAN  P_MAYOR  ;

LISTADOUBLE: P_DYNAMICLIST   P_MENOR  P_DOUBLE  P_MAYOR   P_ID   P_IGUAL   P_NEW   P_DYNAMICLIST   P_MENOR  P_DOUBLE  P_MAYOR  ;


APPENDLISTA:  P_APPEND  P_PAR1   P_ID   P_COMA  EXP  P_PAR2  ;


IF: P_IF   P_PAR1    EXP    P_PAR2  BLOQUE
    |P_IF   P_PAR1    EXP    P_PAR2  BLOQUE  P_ELSE  ELSE  ;


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


WHILE: P_WHILE   P_PAR1  EXP   P_PAR2   BLOQUE  ;

FOR: P_FOR   P_PAR1   ASIG_DEC    P_PUNTOYCOMA     EXP    P_PUNTOYCOMA   EXP    P_PAR2   BLOQUE;


ASIG_DEC:  P_INT   P_ID   P_IGUAL   EXP   
           |P_ID   P_IGUAL   EXP    ;


INCRE_DECRE:  P_ID   P_SUMA  P_SUMA   {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
              |P_ID  P_RESTA  P_RESTA   {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);};


DO_WHILE: P_DO   BLOQUE    P_WHILE   P_PAR1    EXP    P_PAR2  ;


BLOQUE: P_LLAVE1     SENTENCIAS    P_LLAVE2
        |P_LLAVE1   P_LLAVE2    ;



WRITE:  P_WRITELINE  P_PAR1     EXP    P_PAR2   ;


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


SETVAL: P_SETVALUE  P_PAR1  P_ID   P_COMA  EXP  PC_COMA  EXP  P_PAR2  ;


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
    |P_TRUE                          {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("true",$1,this._$.first_line,@1.last_column));}
    |P_FALSE                        {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("false",$1,this._$.first_line,@1.last_column));}
    |P_ID                            {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column));}
    |P_RESTA  EXP                   {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds(new AST_Node("op",$1,this._$.first_line,@1.last_column),$2);}
    |EXP  P_SUMA  P_SUMA            {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP   P_RESTA  P_RESTA          {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |P_CARACTER                      {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);
                                         var text = $1.substr(0,$1.length);
                                         text=text.replace(/\\n/g,"\n");
                                         text=text.replace(/\\t/g,"\t");
                                         text=text.replace(/\\r/g,"\r");
                                         text=text.replace(/\\\\/g,"\\");
                                         text=text.replace(/\\\"/g,"\"");
                                         text=text.replace(/\\\'/g,"\'");
                                        $$.addChilds(new AST_Node("char",text,this._$.first_line,@1.last_column));} 
    |P_ID  P_CORCHETE1   P_ENTERO  P_CORCHETE2   {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("elemento",$1,this._$.first_line,@1.last_column));}
    |GETVAL 
    |LLAMADA;                
