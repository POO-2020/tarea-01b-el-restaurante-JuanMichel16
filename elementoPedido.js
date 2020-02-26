import Precio from "./precio.js"

export default class ElementoPedido {

/**
 * 
 * @param {String} nombre 
 * @param {Number} precio 
 */
    constructor(producto, cantidad) {
        this.productos = producto
        this.cantidades = cantidad
    }

getDescripcion() {
    return `${this.cantidades} x ${this.productos.nombres} = ${this.productos.precios.valores*this.cantidades}`
    }

}