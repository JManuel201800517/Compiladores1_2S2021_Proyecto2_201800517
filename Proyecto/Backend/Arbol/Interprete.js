
class Interprete {
  constructor() {
    this.global = new Pila("global");
    this.mglobal = [];
    this.estructuras = [];
  }

  analizar(raiz) {

    return this.interpretar(raiz, this.global, null);

  }

  interpretar(raiz) {
    let op;
    let res;
    let gg;
    let simbolo;
    let simboloerr;
    let codigo = "";
    let vec;
    let lec;
    var list;
    let simboloT;
    let yy;
    let n;
    let num;
    var ata = new Array();
    if (raiz === undefined || raiz === null) return;


    switch (raiz.tag) {
      case "RAIZ":
        console.log(raiz);
        raiz.childs.forEach(hijo => codigo += this.interpretar(hijo))
        return codigo;
      case "SENTENCIAS":
        raiz.childs.forEach(hijo => codigo += this.interpretar(hijo))
        return codigo;
      case "START":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Start", "", "start", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        console.log(raiz.childs[0].childs[1].childs.length)

        var para = new Array();

        for (let i = 0; i < raiz.childs[0].childs[1].childs.length; i++) {
          simboloT = raiz.childs[0].childs[1].childs[i].value
          console.log(simboloT)

          op = new Operacion();
          res = op.ejecutar(raiz.childs[0].childs[1].childs[i].value)

          console.log(res)

          simbolo = new Constructor(res.valor, "", "", "Parametro", vec.fila, vec.columna)
          console.log(vec)
          console.log(res.valor)
          Consulta.ObtenerInstancia().insertar(simbolo)

          para.push(simboloT)

        }

        yy = vec.value


        /*function yy() {
 
          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "START SIN PARAMETROS":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Start", "", "start", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        //console.log(raiz.childs[0].childs[1].childs.length)

        yy = vec.value


        /*function yy() {
 
          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "METODOS":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Llamada", "", "llamada", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        console.log(raiz.childs[0].childs[1].childs[0].childs[0].childs.length)

        var para = new Array();

        for (let i = 0; i < raiz.childs[0].childs[1].childs[0].childs[0].childs.length; i++) {
          simboloT = raiz.childs[0].childs[1].childs[0].childs[0].childs[i].value.split(" ")
          console.log(simboloT)

          simbolo = new Constructor(simboloT[1], simboloT[0], "", "Parametro", vec.fila, vec.columna)
          console.log(vec)
          console.log(simboloT[1])
          Consulta.ObtenerInstancia().insertar(simbolo)

          para.push(simboloT[1])

        }

        yy = vec.value


        /*function yy() {
 
          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "LLAMADA":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Metodo", "", "metodo", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        console.log(raiz.childs[0].childs[1].childs.length)

        var para = new Array();

        for (let i = 0; i < raiz.childs[0].childs[1].childs.length; i++) {
          simboloT = raiz.childs[0].childs[1].childs[i].value
          console.log(simboloT)

          op = new Operacion();
          res = op.ejecutar(raiz.childs[0].childs[1].childs[i].value)

          console.log(res)

          simbolo = new Constructor(res.valor, "", "", "Parametro", vec.fila, vec.columna)
          console.log(vec)
          console.log(res.valor)
          Consulta.ObtenerInstancia().insertar(simbolo)

          para.push(simboloT)

        }

        yy = vec.value


        /*function yy() {
 
          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "LLAMADA SIN PARAMETROS":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Metodo", "", "metodo", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        //console.log(raiz.childs[0].childs[1].childs.length)

        yy = vec.value


        /*function yy() {
 
          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "DECLARACION VECTOR INT":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(raiz.childs[0].childs)
        console.log(raiz.childs[0].childs[1])
        gg = raiz.childs[0].childs[1]
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < gg; i++) {
          simbolo = new Constructor(vec.value + "[" + i + "]", "integer", 0, "Vector", vec.fila, vec.columna)
          console.log(vec)
          console.log(vec.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        }
        break;
      case "FUNCION DOUBLE":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "double", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        console.log(raiz.childs[0].childs[1].childs[0].childs[0].childs.length)

        var para = new Array();

        for (let i = 0; i < raiz.childs[0].childs[1].childs[0].childs[0].childs.length; i++) {
          simboloT = raiz.childs[0].childs[1].childs[0].childs[0].childs[i].value.split(" ")
          console.log(simboloT)

          simbolo = new Constructor(simboloT[1], simboloT[0], "", "Parametro", vec.fila, vec.columna)
          console.log(vec)
          console.log(simboloT[1])
          Consulta.ObtenerInstancia().insertar(simbolo)

          para.push(simboloT[1])

        }

        yy = vec.value


        /*function yy() {

          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "METODOS SIN PARAMETROS":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Metodo", "", "metodo", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)

        yy = vec.value


        /* function yy() {
 
           raiz.childs[0].childs[2].childs.forEach(nodito => {
             codigo += this.interpretar(nodito);
           });
             
         }*/

        break;
      case "FUNCION DOUBLE SIN PARA":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "double", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)

        yy = vec.value


        /*function yy() {
          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });

        }*/

        break;
      case "FUNCION INT":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "integer", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        console.log(raiz.childs[0].childs[1].childs[0].childs[0].childs.length)

        var para = new Array();

        for (let i = 0; i < raiz.childs[0].childs[1].childs[0].childs[0].childs.length; i++) {
          simboloT = raiz.childs[0].childs[1].childs[0].childs[0].childs[i].value.split(" ")
          console.log(simboloT)

          simbolo = new Constructor(simboloT[1], simboloT[0], "", "Parametro", vec.fila, vec.columna)
          console.log(vec)
          console.log(simboloT[1])
          Consulta.ObtenerInstancia().insertar(simbolo)

          para.push(simboloT[1])

        }

        yy = vec.value


        /*function yy() {

          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "FUNCION INT SIN PARA":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "integer", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)

        yy = vec.value


        /*function yy() {

          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });

        }*/

        break;
      case "FUNCION CHAR":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "char", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        console.log(raiz.childs[0].childs[1].childs[0].childs[0].childs.length)

        var para = new Array();

        for (let i = 0; i < raiz.childs[0].childs[1].childs[0].childs[0].childs.length; i++) {
          simboloT = raiz.childs[0].childs[1].childs[0].childs[0].childs[i].value.split(" ")
          console.log(simboloT)

          simbolo = new Constructor(simboloT[1], simboloT[0], "", "Parametro", vec.fila, vec.columna)
          console.log(vec)
          console.log(simboloT[1])
          Consulta.ObtenerInstancia().insertar(simbolo)

          para.push(simboloT[1])

        }

        yy = vec.value


        /*function yy() {

          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "FUNCION CHAR SIN PARA":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "char", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)

        yy = vec.value


        /*function yy() {

          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });

        }*/

        break;
      case "FUNCION BOOLEAN":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "boolean", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        console.log(raiz.childs[0].childs[1].childs[0].childs[0].childs.length)

        var para = new Array();

        for (let i = 0; i < raiz.childs[0].childs[1].childs[0].childs[0].childs.length; i++) {
          simboloT = raiz.childs[0].childs[1].childs[0].childs[0].childs[i].value.split(" ")
          console.log(simboloT)

          simbolo = new Constructor(simboloT[1], simboloT[0], "", "Parametro", vec.fila, vec.columna)
          console.log(vec)
          console.log(simboloT[1])
          Consulta.ObtenerInstancia().insertar(simbolo)

          para.push(simboloT[1])

        }

        yy = vec.value


        /*function yy() {

          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "FUNCION BOOLEAN SIN PARA":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "boolean", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)

        yy = vec.value


        /* function yy() {
 
           raiz.childs[0].childs[2].childs.forEach(nodito => {
             codigo += this.interpretar(nodito);
           });
 
         }*/

        break;
      case "FUNCION STRING":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "string", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        console.log(raiz.childs[0].childs[1].childs[0].childs[0].childs.length)

        var para = new Array();

        for (let i = 0; i < raiz.childs[0].childs[1].childs[0].childs[0].childs.length; i++) {
          simboloT = raiz.childs[0].childs[1].childs[0].childs[0].childs[i].value.split(" ")
          console.log(simboloT)

          simbolo = new Constructor(simboloT[1], simboloT[0], "", "Parametro", vec.fila, vec.columna)
          console.log(vec)
          console.log(simboloT[1])
          Consulta.ObtenerInstancia().insertar(simbolo)

          para.push(simboloT[1])

        }

        yy = vec.value


        /*function yy() {

          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });
            
        }*/

        break;
      case "FUNCION STRING SIN PARA":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Funcion", "", "string", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)

        yy = vec.value


        /*function yy() {

          raiz.childs[0].childs[2].childs.forEach(nodito => {
            codigo += this.interpretar(nodito);
          });

        }*/

        break;
      case "DECLARACION LISTA INT":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        list = vec.value;
        console.log(list);
        var list = new Array();
        //ata.push(list)
        console.log(list);
        list.push(vec.value)
        list.push(12);
        list.push(23);
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Lista", "", "integer", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        //ata.push(list)
        //console.log(ata)
        break;
      case "ASIGNAR LISTA":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])
        console.log(raiz.childs[0].value)
        console.log(res.valor)
        lec = raiz.childs[0].value;



        if (simbolo.entorno == res.tipo) {
          console.log("aqui funciona")
          console.log(raiz.childs[2].value)

          /*for(let u=0; u < 1000; u++){
            simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value+"["+u+"]")

            if (raiz.childs[0].value+"["+u+"]" == ){}

          }*/

          simbolo = new Constructor(raiz.childs[0].value + "[" + raiz.childs[2].value + "]", res.tipo, res.valor, "lista", simbolo.fila, simbolo.columna)
          Consulta.ObtenerInstancia().insertar(simbolo)


        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.entorno + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "DECLARACION LISTA STRING":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        list = vec.value;
        console.log(list);
        var list = new Array();
        console.log(list);
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Lista", "", "string", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        break;
      case "DECLARACION LISTA CHAR":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        list = vec.value;
        console.log(list);
        var list = new Array();
        console.log(list);
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Lista", "", "char", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        break;
      case "DECLARACION LISTA BOOLEAN":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        list = vec.value;
        console.log(list);
        var list = new Array();
        console.log(list);
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Lista", "", "boolean", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        break;
      case "DECLARACION LISTA DOUBLE":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs)
        //console.log(raiz.childs[0].childs[1])
        list = vec.value;
        console.log(list);
        var list = new Array();
        console.log(list);
        //list.push("kolokol");
        //console.log(list);
        //console.log(list[0]);
        simbolo = new Constructor(vec.value, "Lista", "", "double", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        break;

      case "ARREGLO LISTA CHAR":
        vec = raiz.childs[0].childs[0]

        console.log(vec)
        console.log(vec.fila)
        console.log(vec.columna)
        //console.log(raiz.childs[0].childs[1].childs)
        list = vec.value;
        console.log(list);
        var list = new Array();
        console.log(list);
        simbolo = new Constructor(vec.value, "Lista", "", "char", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)

        gg = raiz.childs[0].childs[1]
        console.log(gg)

        op = new Operacion();
        res = op.ejecutar(gg)
        //console.log(res.valor)
        lec = res.valor

        console.log(lec)
        n = 0;


        for (let i = 0; i < lec.length; i++) {


          if (res.tipo == "string") {
            simbolo = new Constructor(vec.value + "[" + i + "]", "char", res.valor.charAt(n), "lista", vec.fila, vec.columna)
            console.log(vec)
            console.log(vec.value)
            Consulta.ObtenerInstancia().insertar(simbolo)
            list.push(res.valor.charAt(n))
            n = n + 1

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor integer", vec.fila, vec.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
            n = n + 1


          }
        }
        console.log(list)

        break;
      case "ASIGNACION VECTOR INT":
        vec = raiz.childs[0].childs[0]
        lec = raiz.childs[0].childs[1].childs.length
        console.log(vec)
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(lec)
        console.log(raiz.childs[0].childs[1].childs)
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < lec; i++) {
          gg = raiz.childs[0].childs[1].childs[i]

          op = new Operacion();
          res = op.ejecutar(gg)
          if (res.tipo == "integer") {
            simbolo = new Constructor(vec.value + "[" + i + "]", "integer", res.valor, "Vector", vec.fila, vec.columna)
            console.log(vec)
            console.log(vec.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor integer", vec.fila, vec.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)


          }
        }
        //console.log(raiz.childs[0].childs)

        break;
      case "DECLARACION VECTOR STRING":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(raiz.childs[0].childs)
        console.log(raiz.childs[0].childs[1])
        gg = raiz.childs[0].childs[1]
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < gg; i++) {
          simbolo = new Constructor(vec.value + "[" + i + "]", "string", "", "Vector", vec.fila, vec.columna)
          console.log(vec)
          console.log(vec.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        }
        break;
      case "ASIGNACION VECTOR STRING":
        vec = raiz.childs[0].childs[0]
        lec = raiz.childs[0].childs[1].childs.length
        console.log(vec)
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(lec)
        console.log(raiz.childs[0].childs[1].childs)
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < lec; i++) {
          gg = raiz.childs[0].childs[1].childs[i]

          op = new Operacion();
          res = op.ejecutar(gg)
          if (res.tipo == "string") {
            simbolo = new Constructor(vec.value + "[" + i + "]", "string", res.valor, "Vector", vec.fila, vec.columna)
            console.log(vec)
            console.log(vec.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor string", vec.fila, vec.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)


          }
        }
        //console.log(raiz.childs[0].childs)

        break;
      case "DECLARACION VECTOR BOOLEAN":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(raiz.childs[0].childs)
        console.log(raiz.childs[0].childs[1])
        gg = raiz.childs[0].childs[1]
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < gg; i++) {
          simbolo = new Constructor(vec.value + "[" + i + "]", "boolean", "", "Vector", vec.fila, vec.columna)
          console.log(vec)
          console.log(vec.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        }
        break;
      case "ASIGNACION VECTOR BOOLEAN":
        vec = raiz.childs[0].childs[0]
        lec = raiz.childs[0].childs[1].childs.length
        console.log(vec)
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(lec)
        console.log(raiz.childs[0].childs[1].childs)
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < lec; i++) {
          gg = raiz.childs[0].childs[1].childs[i]

          op = new Operacion();
          res = op.ejecutar(gg)
          if (res.tipo == "boolean") {
            simbolo = new Constructor(vec.value + "[" + i + "]", "boolean", res.valor, "Vector", vec.fila, vec.columna)
            console.log(vec)
            console.log(vec.value)
            Consulta.ObtenerInstancia().insertar(simbolo)


          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor boolean", vec.fila, vec.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)


          }
        }
        //console.log(raiz.childs[0].childs)

        break;
      case "DECLARACION VECTOR DOUBLE":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(raiz.childs[0].childs)
        console.log(raiz.childs[0].childs[1])
        gg = raiz.childs[0].childs[1]
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < gg; i++) {
          simbolo = new Constructor(vec.value + "[" + i + "]", "double", 0.0, "Vector", vec.fila, vec.columna)
          console.log(vec)
          console.log(vec.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        }
        break;
      case "ASIGNACION VECTOR DOUBLE":
        vec = raiz.childs[0].childs[0]
        lec = raiz.childs[0].childs[1].childs.length
        console.log(vec)
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(lec)
        console.log(raiz.childs[0].childs[1].childs)
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < lec; i++) {
          gg = raiz.childs[0].childs[1].childs[i]

          op = new Operacion();
          res = op.ejecutar(gg)
          if (res.tipo == "double") {
            simbolo = new Constructor(vec.value + "[" + i + "]", "double", res.valor, "Vector", vec.fila, vec.columna)
            console.log(vec)
            console.log(vec.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor double", vec.fila, vec.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)


          }
        }
        //console.log(raiz.childs[0].childs)

        break;
      case "DECLARACION VECTOR CHAR":
        vec = raiz.childs[0].childs[0]
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(raiz.childs[0].childs)
        console.log(raiz.childs[0].childs[1])
        gg = raiz.childs[0].childs[1]
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < gg; i++) {
          simbolo = new Constructor(vec.value + "[" + i + "]", "char", "", "Vector", vec.fila, vec.columna)
          console.log(vec)
          console.log(vec.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        }
        break;
      case "ASIGNACION VECTOR CHAR":
        vec = raiz.childs[0].childs[0]
        lec = raiz.childs[0].childs[1].childs.length
        console.log(vec)
        console.log(vec.fila)
        console.log(vec.columna)
        console.log(lec)
        console.log(raiz.childs[0].childs[1].childs)
        simbolo = new Constructor(vec.value, "vector", "", "Vector", vec.fila, vec.columna)
        Consulta.ObtenerInstancia().insertar(simbolo)
        for (let i = 0; i < lec; i++) {
          gg = raiz.childs[0].childs[1].childs[i]

          op = new Operacion();
          res = op.ejecutar(gg)
          if (res.tipo == "char") {
            simbolo = new Constructor(vec.value + "[" + i + "]", "char", res.valor, "Vector", vec.fila, vec.columna)
            console.log(vec)
            console.log(vec.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor char", vec.fila, vec.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)


          }
        }
        //console.log(raiz.childs[0].childs)

        break;
      case "ASIGNACION INT":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(res)
          console.log(gg)
          if (res.tipo == "integer") {
            simbolo = new Constructor(hijo.value, res.tipo, res.valor, "Variable", hijo.fila, hijo.columna)
            //console.log(hijo)
            //console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor integer", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "SETVALUE":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])
        console.log(simbolo)
        console.log(raiz.childs[0])
        if (simbolo.entorno == "lista") {
          if (simbolo.tipo == res.tipo) {
            simbolo.valor = res.valor;
            Consulta.ObtenerInstancia().modificar(simbolo)
            console.log(res)


          } else {
            simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
            Func_Error.ObtenerInstancia().insertar(simboloerr)
            console.log(simboloerr)


          }

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "TRUNCATE INT":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "integer") {
            console.log(Math.trunc(gg.value))
            simbolo = new Constructor(hijo.value, res.tipo, Math.trunc(res.valor), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else if (res.tipo == "double") {
            console.log(Math.trunc(gg.value))
            simbolo = new Constructor(hijo.value, "integer", Math.trunc(res.valor), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor integer", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "CASTEO INT":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "char") {
            console.log(gg.value.charCodeAt(0))
            simbolo = new Constructor(hijo.value, "integer", res.valor.charCodeAt(0), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else if (res.tipo == "double") {
            console.log(Math.trunc(gg.value))
            simbolo = new Constructor(hijo.value, "integer", Math.trunc(res.valor), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor integer", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "CASTEO DOUBLE":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "char") {
            console.log(res.valor.charCodeAt(0))
            simbolo = new Constructor(hijo.value, "double", res.valor.charCodeAt(0).toFixed(2), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else if (res.tipo == "integer") {
            console.log(Math.trunc(gg.value))
            simbolo = new Constructor(hijo.value, "double", res.valor.toFixed(2), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor double", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "DECLARACION INT":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          simbolo = new Constructor(hijo.value, "integer", 0, "Variable", hijo.fila, hijo.columna)
          console.log(hijo)
          console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        })
        break;
      case "DECLARACION BOOLEAN":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          simbolo = new Constructor(hijo.value, "boolean", "", "Variable", hijo.fila, hijo.columna)
          console.log(hijo)
          console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        })
        break;
      case "DECLARACION STRING":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          simbolo = new Constructor(hijo.value, "string", "", "Variable", hijo.fila, hijo.columna)
          console.log(hijo)
          console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        })
        break;

      case "DECLARACION DOUBLE":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          simbolo = new Constructor(hijo.value, "double", 0.0, "Variable", hijo.fila, hijo.columna)
          console.log(hijo)
          console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        })
        break;

      case "DECLARACION CHAR":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          simbolo = new Constructor(hijo.value, "char", "", "Variable", hijo.fila, hijo.columna)
          console.log(hijo)
          console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
        })
        break;
      case "CASTEO CHAR":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "integer") {
            console.log(res.valor.charCodeAt(0))
            simbolo = new Constructor(hijo.value, "char", String.fromCharCode(res.valor), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)
          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor char", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "LENGTH INT":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          simbolo = new Constructor(hijo.value, "integer", res.valor.length, "Variable", hijo.fila, hijo.columna)
          console.log(hijo)
          console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)

        })
        break;
      case "ASIGNACION DOUBLE":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "double") {
            simbolo = new Constructor(hijo.value, "double", res.valor, "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor double", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;

      case "ASIGNACION CHAR":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "char") {
            simbolo = new Constructor(hijo.value, "char", res.valor, "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor char", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;

      case "ASIGNACION STRING":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "string") {
            simbolo = new Constructor(hijo.value, "string", res.valor, "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor string", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "TOLOWER STRING":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "string") {
            simbolo = new Constructor(hijo.value, "string", res.valor.toLowerCase(), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor string", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "TOUPPER STRING":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "string") {
            simbolo = new Constructor(hijo.value, "string", res.valor.toUpperCase(), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor string", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "TYPEOF STRING":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          /*if (res.tipo == "double") {
            simbolo = new Constructor(hijo.value, "string", "double", "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)
          } else if (res.tipo == "boolean") {
            simbolo = new Constructor(hijo.value, "string", "boolean", "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else if (gg.tag == "false") {
            simbolo = new Constructor(hijo.value, "string", "boolean", "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {*/
          simbolo = new Constructor(hijo.value, "string", res.tipo, "Variable", hijo.fila, hijo.columna)
          console.log(hijo)
          console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)
          //}

        })
        break;
      case "TOSTRING STRING":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          simbolo = new Constructor(hijo.value, "string", res.valor.toString(), "Variable", hijo.fila, hijo.columna)
          console.log(hijo)
          console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)

        })
        break;
      case "ASIGNACION BOOLEAN":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "boolean") {
            simbolo = new Constructor(hijo.value, "boolean", res.valor, "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor boolean", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;
      case "ROUND DOUBLE":
        raiz.childs[0].childs.forEach(hijo => {
          console.log(hijo.fila)
          console.log(hijo.columna)
          console.log(raiz.childs[0].childs[1].childs[0])
          gg = raiz.childs[0].childs[1]
          op = new Operacion();
          res = op.ejecutar(gg)
          console.log(gg.tag)
          if (res.tipo == "integer") {
            console.log(Math.trunc(res.valor))
            simbolo = new Constructor(hijo.value, "double", Math.round(res.valor).toFixed(2), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else if (res.tipo == "double") {
            console.log(Math.trunc(res.valor))
            simbolo = new Constructor(hijo.value, "double", Math.round(res.valor).toFixed(2), "Variable", hijo.fila, hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)

          } else {
            simbolo = new Cons_Error("Sintactico", "No es un valor double", hijo.fila, hijo.columna)
            Func_Error.ObtenerInstancia().insertar(simbolo)
          }

        })
        break;

      case "ASIGNAR":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])
        if (simbolo.tipo == res.tipo) {
          simbolo.valor = res.valor;
          Consulta.ObtenerInstancia().modificar(simbolo)
          console.log(res)

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "ASIGNAR VECTOR":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])
        if (simbolo.tipo == res.tipo) {
          simbolo.valor = res.valor;
          Consulta.ObtenerInstancia().modificar(simbolo)
          console.log(res)

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "ASIGNAR TOLOWER":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])
        if (simbolo.tipo == "string") {
          if (res.tipo == "string") {
            simbolo.valor = res.valor.toLowerCase();
            Consulta.ObtenerInstancia().modificar(simbolo)
            console.log(res)
          } else {
            simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
            Func_Error.ObtenerInstancia().insertar(simboloerr)
            console.log(simboloerr)

          }

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "ASIGNAR TOUPPER":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])
        if (simbolo.tipo == "string") {
          if (res.tipo == "string") {
            simbolo.valor = res.valor.toUpperCase();
            Consulta.ObtenerInstancia().modificar(simbolo)
            console.log(res)
          } else {
            simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
            Func_Error.ObtenerInstancia().insertar(simboloerr)
            console.log(simboloerr)

          }

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "ASIGNAR TYPEOF":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])
        if (simbolo.tipo == "string") {
          //if (res.tipo == "string") {
          simbolo.valor = res.tipo;
          Consulta.ObtenerInstancia().modificar(simbolo)
          console.log(res)
          /*} else {
            simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
            Func_Error.ObtenerInstancia().insertar(simboloerr)
            console.log(simboloerr)

          }*/

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "ASIGNAR TOSTRING":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])
        if (simbolo.tipo == "string") {
          //if (res.tipo == "string") {
          simbolo.valor = res.valor.toString();
          Consulta.ObtenerInstancia().modificar(simbolo)
          console.log(res)
          /*} else {
            simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
            Func_Error.ObtenerInstancia().insertar(simboloerr)
            console.log(simboloerr)

          }*/

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "ASIGNAR LENGTH":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])

        if (simbolo.tipo == "integer") {
          simbolo.valor = (res.valor).length;
          Consulta.ObtenerInstancia().modificar(simbolo)
          console.log(res)

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo integer", simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "ASIGNAR ROUND":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])

        if (simbolo.tipo == "double") {
          if (res.tipo == "integer") {

            simbolo.valor = Math.round(res.valor).toFixed(2);
            Consulta.ObtenerInstancia().modificar(simbolo)
            console.log(res)

          } else if (res.tipo == "double") {

            simbolo.valor = Math.round(res.valor).toFixed(2);
            Consulta.ObtenerInstancia().modificar(simbolo)
            console.log(res)

          } else {
            simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo " + res.tipo, simbolo.fila, simbolo.columna)
            Func_Error.ObtenerInstancia().insertar(simboloerr)
            console.log(simboloerr)
          }

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;

      case "ASIGNAR TRUNCATE":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operacion();
        res = op.ejecutar(raiz.childs[1])

        if (simbolo.tipo == "integer") {

          if (res.tipo == "integer") {

            simbolo.valor = Math.trunc(res.valor);
            Consulta.ObtenerInstancia().modificar(simbolo)
            console.log(res)

          } else if (res.tipo == "double") {

            simbolo.valor = Math.trunc(res.valor);
            Consulta.ObtenerInstancia().modificar(simbolo)
            console.log(res)

          } else {
            simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo " + res.tipo, simbolo.fila, simbolo.columna)
            Func_Error.ObtenerInstancia().insertar(simboloerr)
            console.log(simboloerr)
          }

        } else {
          simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
          Func_Error.ObtenerInstancia().insertar(simboloerr)
          console.log(simboloerr)
        }

        break;
      case "WRITELINE":
        op = new Operacion();
        res = op.ejecutar(raiz.childs[0]);
        codigo += res.valor + "\n"
        console.log(codigo)
        return codigo;
      case "TERNARIO":
        op = new Operacion();
        //n = op.ejecutar(raiz)
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.value)
        res = op.ejecutar(raiz.childs[0])
        console.log(res)

        yy = op.ejecutar(raiz.childs[1])
        console.log(yy)

        lec = op.ejecutar(raiz.childs[2].childs[0])
        console.log(lec)

        console.log(simbolo)
        console.log(raiz.value)

        if (res.tipo == "boolean") {
          if (simbolo.valor == res.valor) {
            codigo += this.interpretar(yy);
            console.log("hola")
            return codigo;
          } else {
            if (raiz.childs.length == 3) {
              codigo += this.interpretar(lec)
              console.log("adios")
            }
            return codigo;
          }


        }

      case "IF":
        op = new Operacion();
        res = op.ejecutar(raiz.childs[0])

        if (res.tipo == "boolean") {
          if (res.valor) {
            raiz.childs[1].childs[0].childs.forEach(nodito => {
              codigo += this.interpretar(nodito);
            });
            return codigo;
          } else {
            if (raiz.childs.length == 3) {
              if (raiz.childs[2].childs[0].value == "IF") {
                codigo += this.interpretar(raiz.childs[2].childs[0])

              } else {
                codigo += this.interpretar(raiz.childs[2].childs[0].childs[0])
              }

              console.log(raiz.childs[2].childs[0].childs[0])
              console.log(raiz.childs[2].childs[0])
            }
            return codigo;
          }


        }

      case "DO_WHILE":
        op = new Operacion()
        res = op.ejecutar(raiz.childs[1])

        do {
          codigo += this.interpretar(raiz.childs[0].childs[0])
          res = op.ejecutar(raiz.childs[1])
        } while (res.valor)
        break;
      case "WHILE":
        op = new Operacion()
        res = op.ejecutar(raiz.childs[0])
        while (res.valor) {
          codigo += this.interpretar(raiz.childs[1].childs[0])
          res = op.ejecutar(raiz.childs[0])
          console.log(raiz.childs[1].childs[0])
          console.log("AQUI MISMO")
        }
        break;
      case "FOR":
        op = new Operacion()

        console.log(raiz)
        //res = op.ejecutar(raiz.childs[0])
        console.log(raiz.childs[0].childs)


        //console.log(hijo.fila)
        //console.log(hijo.columna)
        //console.log(raiz.childs[0].childs[0].childs)
        gg = raiz.childs[0].childs[0].childs[1]
        //op = new Operacion();
        res = op.ejecutar(gg)
        console.log(res)
        console.log(gg)
        if (res.tipo == "integer") {
          simbolo = new Constructor(raiz.childs[0].childs[0].childs[0].value, res.tipo, res.valor, "Variable", "", "")
          //console.log(hijo)
          //console.log(hijo.value)
          Consulta.ObtenerInstancia().insertar(simbolo)

          console.log(raiz.childs[0].childs[0].childs[0].value)

          //lec = hijo.value

          let b = raiz.childs[0].childs[0].childs[0].value;

          num = res.valor

          n = raiz.childs[1].childs[0].childs[0].value + raiz.childs[1].childs[1].value + raiz.childs[1].childs[2].childs[0].value
          console.log(raiz.childs[1])
          //console.log(n.valor)

          yy = raiz.childs[2].childs[0].childs[0].value + raiz.childs[2].childs[1].value
          console.log(raiz.childs[2])
          //console.log(yy.valor)

          console.log(raiz)

          console.log(b + "=" + num + ";" + n + ";" + yy)

          let r = 0;

          for (raiz.childs[0].childs[0].childs[0].value = res.valor; raiz.childs[1].childs[0].childs[0].value + raiz.childs[1].childs[1].value + raiz.childs[1].childs[2].childs[0].value; raiz.childs[2].childs[0].childs[0].value + raiz.childs[2].childs[1].value) {
            console.log("funciona muy bien")
            r = r + 1
            codigo += this.interpretar(raiz.childs[3].childs[0])
            res = op.ejecutar(raiz.childs[0])

            simboloT = Consulta.ObtenerInstancia().obtener(b)
            //op = new Operacion();
            lec = op.ejecutar(raiz.childs[2])
            console.log(b)
            console.log(simboloT)
            if (simboloT.tipo == lec.tipo) {
              simboloT.valor = lec.valor;
              Consulta.ObtenerInstancia().modificar(simboloT)
              console.log(lec)

            } else {
              simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
              Func_Error.ObtenerInstancia().insertar(simboloerr)
              console.log(simboloerr)
            }


            if (r == raiz.childs[1].childs[2].childs[0].value) {
              break;
            }


          }

        } else {
          simbolo = new Cons_Error("Sintactico", "No es un valor integer", hijo.fila, hijo.columna)
          Func_Error.ObtenerInstancia().insertar(simbolo)
        }


        break;
      case "FOR1":
        op = new Operacion()

        console.log(raiz)
        //res = op.ejecutar(raiz.childs[0])
        console.log(raiz.childs[0].childs)


        //console.log(hijo.fila)
        //console.log(hijo.columna)
        //console.log(raiz.childs[0].childs[0].childs)
        gg = raiz.childs[0].childs[1]
        //op = new Operacion();
        res = op.ejecutar(gg)
        console.log(res)
        console.log(gg)
        //lec = hijo.value

        let b = raiz.childs[0].childs[0].value;

        num = res.valor

        n = raiz.childs[1].childs[0].childs[0].value + raiz.childs[1].childs[1].value + raiz.childs[1].childs[2].childs[0].value
        console.log(raiz.childs[1])
        //console.log(n.valor)

        yy = raiz.childs[2].childs[0].childs[0].value + raiz.childs[2].childs[1].value
        console.log(raiz.childs[2])
        //console.log(yy.valor)

        console.log(raiz)

        console.log(b + "=" + num + ";" + n + ";" + yy)

        let r = 0;

        for (raiz.childs[0].childs[0].value = res.valor; raiz.childs[1].childs[0].childs[0].value + raiz.childs[1].childs[1].value + raiz.childs[1].childs[2].childs[0].value; raiz.childs[2].childs[0].childs[0].value + raiz.childs[2].childs[1].value) {
          console.log("funciona muy bien")
          r = r + 1
          codigo += this.interpretar(raiz.childs[3].childs[0])
          res = op.ejecutar(raiz.childs[0])

          simboloT = Consulta.ObtenerInstancia().obtener(b)
          //op = new Operacion();
          lec = op.ejecutar(raiz.childs[2])
          console.log(b)
          console.log(simboloT)
          if (simboloT.tipo == lec.tipo) {
            simboloT.valor = lec.valor;
            Consulta.ObtenerInstancia().modificar(simboloT)
            console.log(lec)

          } else {
            simboloerr = new Cons_Error("Sintactico", raiz.childs[0].value + " es una variable de tipo " + simbolo.tipo + " y se le esta asignando un valor de tipo  " + res.tipo, simbolo.fila, simbolo.columna)
            Func_Error.ObtenerInstancia().insertar(simboloerr)
            console.log(simboloerr)
          }


          if (r == raiz.childs[1].childs[2].childs[0].value) {
            break;
          }


        }



        break;
      case "BREAK":
        console.log(raiz)
        console.log("hululu")

        codigo += this.interpretar(raiz.value)



        return codigo;

      case "CONTINUE":
        console.log(raiz)
        console.log("hololo")

        codigo += this.interpretar(raiz.value)
        return codigo;

      case "RETURN":
        console.log(raiz)
        console.log("helele")

        codigo += this.interpretar(raiz.value)
        return codigo;

      case "RETURN EXP":
        op = new Operacion()
        res = op.ejecutar(raiz.childs[0])

        codigo += this.interpretar(raiz.value + " " + res.valor)

        return codigo;

      case "SWITCH":
        op = new Operacion()
        res = op.ejecutar(raiz.childs[0])

        console.log(res);
        console.log("diminuto")
        console.log(res.valor)

        lec = raiz.childs[1].childs[0].childs[0]

        yy = raiz.childs[1].childs[0].childs.length

        console.log(raiz.childs[1].childs[0].childs)

        if (lec.value == "DEFAULT") {
          console.log("leon")

          for (let h = 3; h < yy; h = h + 3) {

            simboloT = op.ejecutar(raiz.childs[1].childs[0].childs[h])
            console.log(simboloT)
            console.log("ñoño")
            console.log(simboloT.valor)


            switch (res.valor) {

              case simboloT.valor:
                codigo += this.interpretar(raiz.childs[1].childs[0].childs[1 + h].childs[0])
                console.log("se pudo")
                console.log(raiz.childs[1].childs[0].childs[1 + h].childs[0])
                res = op.ejecutar(raiz.childs[0])


              default:
                codigo += this.interpretar(raiz.childs[1].childs[0].childs[1].childs[0])
                console.log("no se pudo")
                console.log(raiz.childs[1].childs[0].childs[1].childs[0])
                res = op.ejecutar(raiz.childs[0])

            }

          }
          switch (res.valor) {

            default:
              codigo += this.interpretar(raiz.childs[1].childs[0].childs[1].childs[0])
              console.log("que se bva hacer")
              res = op.ejecutar(raiz.childs[0])
              console.log(raiz.childs[1].childs[0].childs[1].childs[0])

          }


        } else {
          for (let h = 1; h < yy; h = h + 3) {

            simboloT = op.ejecutar(raiz.childs[1].childs[0].childs[h])


            switch (res.valor) {

              case simboloT.valor:
                codigo += this.interpretar(raiz.childs[1].childs[0].childs[1 + h].childs[0])
                res = op.ejecutar(raiz.childs[0])
                console.log(raiz.childs[1].childs[0].childs[1 + h].childs[0])


              default:
                codigo += this.interpretar(raiz.childs[1].childs[0].childs[1].childs[0])
                res = op.ejecutar(raiz.childs[0])
                console.log(raiz.childs[1].childs[0].childs[1].childs[0])


            }

          }




        }


        break;

    }
    return codigo;

  }

}