var Consulta = (function () {

    var instancia;

    class TablaSimbolo {
        constructor() {
            this.simbolos = [];
        }

        insertar(sim) {
            this.simbolos.push(sim);
        }

        ObtenerSimbolos() {

            var texto = " ";

            texto += `<html><head><title>Tabla de Simbolos</title><style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            
            th, td {
              text-align: left;
              padding: 8px;
            }
            
            tr:nth-child(even){background-color: #C4F3E5}
            
            th {
              background-color: #D3F3EE;
              color: white;
            }
            </style></head><body>
            <h1>Tabla de Simbolos</h1>
            <table>
            <tr>
                <th>No.</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Entorno</th>
                <th>Fila</th>
                <th>Columna</th>
            </tr>`;
            var contador = 1;
            this.simbolos.forEach(sim => {
                texto += "<tr>\n";
                texto += "<td>" + contador + "</td>\n";
                texto += "<td>" + sim.nombre + "</td>\n";
                texto += "<td>" + sim.tipo + "</td>\n";
                texto += "<td>" + sim.valor + "</td>\n";
                texto += "<td>" + sim.entorno + "</td>\n";
                texto += "<td>" + sim.fila + "</td>\n";
                texto += "<td>" + sim.columna + "</td>\n";
                texto += "</tr>";
                contador++;
            })
            texto += "</table></body></html>";

            return texto;
        }

        Reiniciar() {
            this.simbolos = []
        }

        obtener(nombre) {
            let res = null;
            this.simbolos.forEach(sim => {
                if (sim.nombre == nombre) {
                    res = sim;
                }
            })
            return res;
        }

        modificar(simbol) {

            this.simbolos.forEach(sim => {
                if (sim.nombre == simbol.nombre) {
                    sim.valor = simbol.valor;
                    sim.tipo = simbol.tipo;
                    sim.entorno = simbol.entorno;
                    sim.linea = simbol.linea;
                    sim.columna = simbol.columna;
                }
            })
        }
    }

    function agregarIns(){
        return new TablaSimbolo();
    }

    

    return {
        ObtenerInstancia:function(){
            if(!instancia){
                instancia = agregarIns()
            }
            return instancia;
        }
    }

})();