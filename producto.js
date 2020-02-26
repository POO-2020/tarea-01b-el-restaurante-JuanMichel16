import Precio from "./precio.js"
export default class Producto {

/**
 * 
 * @param {String} nombre 
 * @param {Number} precio 
 */
    constructor(nombre, precio) {
        this.nombres = nombre
        this.precios = precio
    }

getDescripcion() {
    return ` ${this.nombres} ${this.precios.getPrecio()} `
    }
}