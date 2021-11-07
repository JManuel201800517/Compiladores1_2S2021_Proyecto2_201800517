var Func_Error = (function () {
    var instancia;

    class Listado {
        constructor() {
            this.errorSec = [];
            this.inicio = null;
            this.final = null;
        }

        insertar(Error) {
            this.errorSec.push(Error)
            
            if (this.inicio == null) {
                this.inicio = Error;
                this.final = Error;
                return;
            }

            this.final.siguiente = Error;
            Error.anterior = this.final;
            this.final = Error;
            console.log(this.final);

        }


        ObtenerError() {
            //var texto1 = "";

            var prueba = this.inicio;

            var texto = " ";

            texto += `<html><head><title>Tabla de Errores</title><style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            
            th, td {
              text-align: left;
              padding: 8px;
            }
            
            tr:nth-child(even){background-color: #E66D7F }
            
            th {
              background-color: #F9052A;
              color: white;
            }
            </style></head><body>
            <h1>Tabla de Errores</h1>
            <table>
            <tr>
                <th>No.</th>
                <th>Tipo</th>
                <th>Descripcion</th>
                <th>Fila</th>
                <th>Columna</th>
            </tr>`;
            //var contador1 = 1;

            var contador = 1;

           /* while(prueba!=null){
                texto += "<tr>\n";
                texto += "<td>" + contador1 + "</td>\n";
                texto += "<td>" + prueba.tipo + "</td>\n";
                texto += "<td>" + prueba.descripcion + "</td>\n";
                texto += "<td>" + prueba.fila + "</td>\n";
                texto += "<td>" + prueba.columna + "</td>\n";
                texto += "</tr>";
                contador1++;
                texto += "ERROR/FALLO: Tipo de Error: "+prueba.tipo+" Descripcion Error: "+prueba.descripcion+" Fila Error: "+prueba.fila+" Columna Error: "+prueba.columna+" \n";
                prueba = prueba.siguiente;

            }*/
            

            this.errorSec.forEach(sim => {
                texto += "<tr>\n";
                texto += "<td>" + contador + "</td>\n";
                texto += "<td>" + sim.tipo + "</td>\n";
                texto += "<td>" + sim.descripcion + "</td>\n";
                texto += "<td>" + sim.fila + "</td>\n";
                texto += "<td>" + sim.columna + "</td>\n";
                texto += "</tr>";
                contador++;
            })


            texto += "</table></body></html>";

            return texto;


            //return texto1;
        }

        Reiniciar() {
            this.inicio = null;
            this.final = null;

            this.errorSec = [];
        }
    }

    function agregarIns() {
        return new Listado();
    }

    return {
        ObtenerInstancia: function () {
            if (!instancia) {
                instancia = agregarIns()
            }
            return instancia;
        }
    }
})();