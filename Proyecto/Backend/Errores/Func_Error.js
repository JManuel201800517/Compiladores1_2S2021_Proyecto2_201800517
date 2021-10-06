var Func_Error = (function(){
    var instancia;

    class Listado{
        constructor(){
            this.inicio = null;
            this.final = null;
        }

        insertar(Error){
            if(this.inicio == null){
                this.pinicio = Error;
                this.final = Error;
                return;
            }
    
            this.final.siguiente = Error;
            Error.anterior = this.final;
            this.final = Error;
            console.log(this.final);
    
        }


        ObtenerError(){
            var texto = "";

            var prueba = this.inicio;

            while(prueba!=null){
                texto += "ERROR/FALLO: Tipo de Error: "+prueba.tipo+" Descripcion Error: "+prueba.descripcion+" Fila Error: "+prueba.fila+" Columna Error: "+prueba.columna+" \n";
                prueba = prueba.siguiente;

            }

            return texto;
        }

        Reiniciar(){
            this.inicio = null;
            this.final = null;
        }
    }

    function agregarIns(){
        return new Listado();
    }

    return {
        ObtenerInstancia: function(){
            if(!instancia){
                instancia=agregarIns()
            }
            return instancia;
        }
    }
})();