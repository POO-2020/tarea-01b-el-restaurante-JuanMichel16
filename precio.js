export default class Precio {

/**
 * 
 * @param {number} valor 
 */    

    constructor( valor ) {
        this.valores = valor
    }

getPrecio() {
    return ` $${Number(this.valores)}`
}
}