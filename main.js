import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Direccion from "./direccion.js"

class Main {

    constructor() {
        this.nuevaFecha = new Fecha (2, 4, 1999)
        this.nuevoTiempo = new Tiempo(12, 34, "pm")
        this.precioNuevo = new Precio(200)
        this.nuevoProducto = new Producto("PIZZA MEXICANA", this.precioNuevo)
        this.nuevoPedido = new ElementoPedido(this.nuevoProducto,3)
        this.nuevoDomicilio = new Direccion("Pocajontas", 18, 18, "Centro", 28750, "Colima", "Minatitlan")
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

probarPedido() {
    console.log(`${this.nuevoPedido.getDescripcion()}`)
}

ProbarDireccion() {
    console.log(`${this.nuevoDomicilio.getFormatoCorto()}`)
    console.log(`${this.nuevoDomicilio.getFormatoLargo()}`)
}
}
let app = new Main()
app.probarPrecio()
app.probarProducto()
app.probarPedido()
app.ProbarDireccion()