import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Precio from "./precio.js"
import Producto from "./producto.js"

class Main {

    constructor() {
        this.nuevaFecha = new Fecha (2, 4, 1999)
        this.nuevoTiempo = new Tiempo(12, 34, "pm")
        this.precioNuevo = new Precio(123123)
        this.nuevoProducto = new Producto("PIZZA MEXICANA", this.precioNuevo)
    }

probarFecha() {
    console.log(`La fecha del dia de hoy es ${this.nuevaFecha.getDias()}`)
}

probarPrecio() {
    console.log(` ${this.precioNuevo.getPrecio()}`)
}

probarProducto() {
    console.log(`${this.nuevoProducto.getDescripcion()}`)
}

}
let app = new Main()
app.probarPrecio()
app.probarProducto()