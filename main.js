import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Precio from "./precio.js"
class Main {

    constructor() {
        this.nuevaFecha = new Fecha (2, 4, 1999)
        this.nuevoTiempo = new Tiempo(12, 34, "pm")
        this.precioNuevo = new Precio(123123)
    }

probarFecha() {
    console.log(`La fecha del dia de hoy es ${this.nuevaFecha.getDias()}`)
}
}
let app = new Main()
app.probarFecha()