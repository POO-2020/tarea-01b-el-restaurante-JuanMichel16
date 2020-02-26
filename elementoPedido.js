import Precio from "./precio.js"

export default class ElementoPedido {

/**
 * 
 * @param {String} producto 
 * @param {Number} cantidad
 */
    constructor(producto, cantidad) {
        this.productos = producto
        this.cantidades = cantidad
    }

getDescripcion() {
    console.log("asjdjkadsjkasd");
    return `${this.cantidades} x ${this.productos.nombres} = ${this.productos.precios.valores*this.cantidades}`
    }

}