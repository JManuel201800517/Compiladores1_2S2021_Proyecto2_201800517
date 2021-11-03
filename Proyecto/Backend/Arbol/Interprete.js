
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
    let codigo = "";
    let vec;
    let lec;
    if (raiz === undefined || raiz === null) return;


    switch (raiz.tag) {
      case "RAIZ":
        console.log(raiz);
        raiz.childs.forEach(hijo => codigo += this.interpretar(hijo))
        return codigo;
      case "SENTENCIAS":
        raiz.childs.forEach(hijo => codigo += this.interpretar(hijo))
        return codigo;
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
          if ( res.tipo == "integer") {
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
      case "LENGHT INT":
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

      case "ASIGNA":
        simbolo = Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
        op = new Operador();
        res = op.ejecutar(raiz.childs[1])
        simbolo.tipo = res.tipo;
        simbolo.valor = res.valor;
        Consulta.ObtenerInstancia().modificar(simbolo)
        console.log(res)
        break;
      case "WRITELINE":
        op = new Operacion();
        res = op.ejecutar(raiz.childs[0]);
        codigo += res.valor + "\n"
        console.log(codigo)
        return codigo;

      case "IF":
        op = new Operador();
        res = op.ejecutar(raiz.childs[0])

        if (res.tipo == "boolean") {
          if (res.valor) {
            raiz.childs[1].childs[0].childs.forEach(nodito => {
              codigo += this.interpretar(nodito);
            });
            return codigo;
          } else {
            if (raiz.childs.length == 3) {
              codigo += this.interpretar(raiz.childs[2].childs[0].childs[0])
            }
          }


        }

      case "DO_WHILE":
        op = new Operador()
        res = op.ejecutar(raiz.childs[1])

        do {
          codigo += this.interpretar(raiz.childs[0].childs[0])
          res = op.ejecutar(raiz.childs[1])
        } while (res.valor)
        break;
      case "WHILE":
        op = new Operador()
        res = op.ejecutar(raiz.childs[0])
        while (res.valor) {
          codigo += this.interpretar(raiz.childs[1].childs[0])
          res = op.ejecutar(raiz.childs[0])
        }
        break;
    }
    return codigo;

  }

}