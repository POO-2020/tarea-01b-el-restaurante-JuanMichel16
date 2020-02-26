import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"

class Main {

    constructor() {
        this.nuevaFecha = new Fecha (2, 4, 1999)
        this.nuevoTiempo = new Tiempo(12, 34, "pm")
        this.precioNuevo = new Precio(200)
        this.precioNuevo2 = new Precio(300)
        this.nuevoProducto = new Producto("PIZZA MEXICANA", this.precioNuevo)
        this.nuevoProducto2 = new Producto( "Torta chilanga", this.precioNuevo)
        this.nuevoPedido = new ElementoPedido(this.nuevoProducto,3)
        this.nuevoPedido2 = new ElementoPedido(this.nuevoProducto2,4)
        this.nuevoDomicilio = new Direccion("Pocajontas", 18, 18, "Centro", 28750, "Colima", "Minatitlan")
        this.nuevoCliente = new Cliente ("Juan Michel", this.nuevoDomicilio.getFormatoCorto(), 145456452432)

        this.pedidos = new Pedido(this.nuevaFecha, this.nuevoTiempo, this.nuevoCliente)
        this.pedidos.agregarElemento(this.nuevoPedido)
        this.pedidos.agregarElemento(this.nuevoPedido2,2)
        this.pedidos.agregarElemento(this.nuevoPedido,2)

        this.restaurantes = new Restaurante("Shadowlands", 312566645, this.direccion)
    }

probarFecha() {
    console.log(`anos: ${this.nuevaFecha.getAños()}`)
    console.log(`Meses: ${this.nuevaFecha.getMeses()}`)
    console.log(`Semanas: ${this.nuevaFecha.getSemanas()}`)
    console.log(`Dias: ${this.nuevaFecha.getDias()}`)
    console.log(`La fecha del dia de hoy es ${this.nuevaFecha.getDiaFecha()}`)
}

probarPrecio() {
    console.log(` ${this.precioNuevo.getPrecio()}`)
}

probarProducto() {
    console.log(`${this.nuevoProducto.getDescripcion()}`)
}

probarPedido() {
    console.log(`${this.nuevoPedido.getDescripcion()}`)
    console.log(`${this.nuevoPedido2.getDescripcion()}`)
}

ProbarDireccion() {
    console.log(`${this.nuevoDomicilio.getFormatoCorto()}`)
    console.log(`${this.nuevoDomicilio.getFormatoLargo()}`)
}

probarCliente() {
    console.log(`${this.nuevoCliente.getPerfil()}`)
}

getPedido(){
    console.log(this.pedidos.getResumen())
    console.log(this.pedidos.getNumeroElementos())
    console.log(this.pedidos.getNumeroProductos())
    console.log(this.pedidos.getCostoTotal())
    this.pedidos.listarElemeto()

}

getRestaurante()
    {
        this.restaurantes.registrarProducto(this.nuevoProducto)
        this.restaurantes.registrarProducto(this.nuevoProducto2)
        this.restaurantes.registrarPedido(this.pedidos)

        this.restaurantes.listarProductos()
        this.restaurantes.listarPedidos()
    }
}
let app = new Main()
app.probarFecha()
app.probarPrecio()
app.probarProducto()
app.probarPedido()
app.ProbarDireccion()
app.probarCliente()
app.getPedido()
app.getRestaurante()