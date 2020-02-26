export default class Restaurante{
    constructor(nombre, telefono, direccion){
        this.nombres = nombre
        this.telefonos = telefono
        this.direcciones = direccion
        this.productos = [];
        this.pedidos = [];
    }
    registrarProducto(producto){
        this.productos.push(producto)
    }
    registrarPedido(pedido){
        this.pedidos.push(pedido)
    }

    listarProductos(){
        this.productos.forEach( (producto) => {
            console.log(producto);
            
            console.log`${producto.getDescripcion()}`
        })
    }
    listarPedidos(){
        this.pedidos.forEach( (pedido, i) => {
            console.log(pedido)
            console.log(`(${i+1}) ~ ${pedido.getResumen()}`)
        })
    }
}