export default class Precio {

/**
 * 
 * @param {number} valor 
 */    

    constructor( valor ) {
        this.valores = valor
    }

getPrecio() {
    return `El precio es ${Number(this.valores)}`
}
}