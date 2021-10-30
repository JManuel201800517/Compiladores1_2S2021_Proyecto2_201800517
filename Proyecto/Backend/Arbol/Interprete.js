
class Interprete{
    constructor(){
      this.global = new Pila("global");
      this.mglobal = [];
      this.estructuras=[];
    }
  
    analizar(raiz){
  
      return this.interpretar(raiz,this.global,null);
  
    }
  
    interpretar(raiz){
      let op;
      let res;
      let gg;
      let simbolo;
      let codigo="";
      if(raiz===undefined || raiz===null)return;
  
  
      switch(raiz.tag){
        case "RAIZ":
          console.log(raiz);
          raiz.childs.forEach(hijo => codigo+=this.interpretar(hijo))
          return codigo;
        case "SENTENCIAS":
          raiz.childs.forEach(hijo=> codigo+=this.interpretar(hijo) )
          return codigo;
        case "VARINT1":
          raiz.childs[0].childs.forEach(hijo=> {
            console.log(hijo.fila)
            console.log(hijo.columna)
            console.log(raiz.childs[0].childs[1].childs[0])
            gg = raiz.childs[0].childs[1].childs[0]
            simbolo = new Constructor(hijo.value,"integer",gg.value,"Variable",hijo.fila,hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)
          })
        break;
        case "VARINT":
          raiz.childs[0].childs.forEach(hijo=> {
            console.log(hijo.fila)
            console.log(hijo.columna)
            simbolo = new Constructor(hijo.value,"integer","","Variable",hijo.fila,hijo.columna)
            console.log(hijo)
            console.log(hijo.value)
            Consulta.ObtenerInstancia().insertar(simbolo)
          })
        break;
        case "ASIGNACIONINT":
          simbolo=Consulta.ObtenerInstancia().obtener(raiz.childs[0].value)
          op = new Operador();
          res = op.ejecutar(raiz.childs[1])
          simbolo.tipo=res.tipo;
          simbolo.valor=res.valor;
          Consulta.ObtenerInstancia().modificar(simbolo)
          console.log(res)
        break;
        case "WRITELINE":
          op = new Operador();
          res = op.ejecutar(raiz.childs[0]);
          codigo+=res.valor+"\n"
          console.log(codigo)
          return codigo;
  
        case "IF":
          op = new Operador();
          res=op.ejecutar(raiz.childs[0])
  
          if(res.tipo=="boolean"){
            if(res.valor){
              raiz.childs[1].childs[0].childs.forEach(nodito => {
                codigo+=this.interpretar(nodito);
              });
              return codigo;
            }else{
              if(raiz.childs.length==3){
                codigo+=this.interpretar(raiz.childs[2].childs[0].childs[0])
              }
            }
  
            
          }
  
        case "DO_WHILE":
          op = new Operador()
          res = op.ejecutar(raiz.childs[1])
  
          do{
            codigo+=this.interpretar(raiz.childs[0].childs[0])
            res = op.ejecutar(raiz.childs[1])
          }while(res.valor)
          break;
        case "WHILE":
          op = new Operador()
          res = op.ejecutar(raiz.childs[0])
          while(res.valor){
            codigo+=this.interpretar(raiz.childs[1].childs[0])
            res = op.ejecutar(raiz.childs[0])
          }
          break;
      }
      return codigo;
    
  }
  
  }