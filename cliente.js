export default class Cliente {

/**
 * 
 * @param {String} nombre 
 * @param {String} direccion 
 * @param {number} telefono 
 */


    constructor(nombre, direccion, telefono) {
        this.nombres = nombre
        this.direcciones = direccion
        this.telefonos = telefono
    }

getPerfil() {
    return `${this.nombres}, ${this.direcciones}, ${this.telefonos}`
}
}