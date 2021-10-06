class Pila{
    constructor(ambito){
        this.tamaño = 2;
        this.comienzo = null;
        this.terminacion = null;
        this.ambito = ambito;
        this.negacion = -1;
        this.nombre = ambito;
    }

    Reiniciar(){
        this.tamaño = 2;
        this.comienzo = null;
        this.terminacion = null;
        this.negacion = -1;
    }

    PushPila(nuevo){
        if (this.ExisteElem(nuevo.nombre)) return false;

        if (this.comienzo == null)
        {
            this.comienzo = nuevo;
            this.terminacion = nuevo;
        
        }
        else
        {
            nuevo.anterior = this.terminacion;
            this.terminacion.siguiente = nuevo;
            this.terminacion = nuevo;
           
        }
        this.tamaño++;

        return true;

    }

    PopPila(){
        if (this.tamaño == 0) {return null;}

        var regresar = this.terminacion;
        this.terminacion = this.terminacion.anterior;
        if (this.terminacion == null) this.comienzo = null;
        this.tamaño--;
        return regresar;
    }

    Vaciar(){
        while (!this.terminacion.nombre == "$$" && !this.terminacion.nombre() == "$"){
            var aux = this.PopPila();
        }
        this.PopPila();
    }

    ExisteElem(nombre){
        if (nombre == "$$" || nombre == "$") return false;
        var actual = this.terminacion;
        
        while(actual!= null){
            if(actual.nombre.toUpperCase()==nombre.toUpperCase()){
                return true;
            }
            if(actual.nombre=="$$")return false;
            actual = actual.anterior;
        }

        return false;
    }

    ObtenerNodo(nombre){
        var actual = this.terminacion;
        if (actual == null) return null;

        for (var i = 0; i < this.tamaño-2; i++)
        {
            if (actual.nombre.toUpperCase()==nombre.toUpperCase())
            {
                return actual;   
            }
            
            actual = actual.anterior;
        }
        return null;

    }

    GlobalPush(nuevo){
        if (this.ExisteElem(nuevo.nombre)) return false;
        
        if (this.comienzo == null)
        {
            this.comienzo = nuevo;
            this.terminacion = nuevo;
        
        }
        else
        {
            nuevo.anterior = this.terminacion;
            this.terminacion.siguiente = nuevo;
            this.terminacion = nuevo;
           
        }
        this.negacion--;

        return true;
    }
}