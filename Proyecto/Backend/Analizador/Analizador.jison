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

["]           return 'P_COMILLA';

[']           return  'P_APOSTROFE';

[0-9]+("."[0-9]+)?\b    return 'P_NUMERO';

[0-9]+                   return 'P_ENTERO';

([a-zA-Z_])[a-zA-Z0-9_]* return 'P_ID';



// Para char

[0-9]                   return 'P_ENT';

([a-zA-Z_])              return  'P_ALFABETO';

[P_ALFABETO|P_ENT|P_TABULACION|P_COMILLASIMPLE|P_COMILLADOBLE|P_BARRAINVERTIDA|P_SALTOLINEA|
  P_COMENFINAL|P_COMENINICIO|P_PREGUNTA|P_DOSPUNTOS|P_PUNTOYCOMA|P_COMA|P_PUNTO|P_CORCHETE2|
  P_CORCHETE1|P_LLAVE2|P_LLAVE1|P_PAR2|P_PAR1|P_NOT|P_SAND|P_OR|P_MAYOR|P_MENOR|P_IGUAL|P_MODULO|
  P_POTENCIA|P_DIVISION|P_MULTIPLICACION|P_RESTA|P_SUMA]                                          return  'P_CARACTER';


[P_ALFABETO|P_ENT|P_TABULACION|P_COMILLASIMPLE|P_COMILLADOBLE|P_BARRAINVERTIDA|P_SALTOLINEA|
  P_COMENFINAL|P_COMENINICIO|P_PREGUNTA|P_DOSPUNTOS|P_PUNTOYCOMA|P_COMA|P_PUNTO|P_CORCHETE2|
  P_CORCHETE1|P_LLAVE2|P_LLAVE1|P_PAR2|P_PAR1|P_NOT|P_SAND|P_OR|P_MAYOR|P_MENOR|P_IGUAL|P_MODULO|
  P_POTENCIA|P_DIVISION|P_MULTIPLICACION|P_RESTA|P_SUMA|P_AND|P_OR|P_MAYORIGUAL|P_MENORIGUAL|P_DIFERENTE|
  P_IGUALACION|P_FALSE|P_TRUE|P_WITH|P_START|P_TOCHARARRAY|P_TOSTRING|P_TYPEOF|P_ROUND|P_TRUNCATE|
  P_LENGHT|P_TOUPPER|P_TOLOWER|P_WRITELINE|P_VOID|P_RETURN|P_CONTINUE|P_DO|P_FOR|P_WHILE|P_BREAK|
  P_DEFAULT|P_CASE|P_SWITCH|P_ELSE|P_IF|P_SETVALUE|P_GETVALUE|P_APPEND|P_DYNAMICLIST|P_NEW|
  P_STRING|P_CHAR|P_BOOLEAN|P_DOUBLE|P_INT]*                                                 return  'P_TODO';


// \"[^\"]*\"              { yytext = yytext.substr(1,yyleng-2); return 'Tok_string'; }






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
S: SENTENCIAS EOF ;




SENTENCIAS: SENTENCIAS SENTENCIA 
            | SENTENCIA ;




SENTENCIA: VARINT            
           |VARDOUBLE        
           |VARBOOLEAN       
           |VARCHAR          
           |VARSTRING        ;



VARINT:  P_INT   P_ID    VARIABLEINT ;

VARIABLEINT:  P_COMA    P_ID   VARIABLEINT
          | P_PUNTOYCOMA 
          | P_IGUAL    P_ENTERO  P_PUNTOYCOMA;



VARDOUBLE:  P_DOUBLE   P_ID    VARIABLEDOUBLE ;

VARIABLEDOUBLE:  P_COMA    P_ID   VARIABLEDOUBLE
          | P_PUNTOYCOMA 
          | P_IGUAL    P_NUMERO  P_PUNTOYCOMA;



VARBOOLEAN:  P_BOOLEAN   P_ID    VARIABLEBOOLEAN ;

VARIABLEBOOLEAN:  P_COMA    P_ID   VARIABLEBOOLEAN
          | P_PUNTOYCOMA 
          | P_IGUAL    TRUEFALSE   P_PUNTOYCOMA;

TRUEFALSE: P_TRUE
          |P_FALSE   ;



VARSTRING:  P_STRING   P_ID    VARIABLESTRING ;

VARIABLESTRING:  P_COMA    P_ID   VARIABLESTRING
          | P_PUNTOYCOMA 
          | P_IGUAL   P_COMILLA    P_TODO   P_COMILLA  P_PUNTOYCOMA;



VARCHAR:  P_CHAR   P_ID    VARIABLECHAR ;

VARIABLECHAR:  P_COMA    P_ID   VARIABLECHAR
          | P_PUNTOYCOMA 
          | P_IGUAL   P_APOSTROFE   P_CARACTER   P_APOSTROFE  P_PUNTOYCOMA;