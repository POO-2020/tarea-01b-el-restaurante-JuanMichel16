export default class Direccion {

/**
 * 
 * @param {String} calle 
 * @param {Number} NumExterior 
 * @param {Number} NumInterior 
 * @param {number} Colonia 
 * @param {Number} CodigoPostal 
 * @param {String} Ciudad 
 * @param {String} Municipio 
 */

    constructor(calle,NumExterior,NumInterior, Colonia, CodigoPostal, Ciudad, Municipio) {
        this.calles = calle
        this.NumerosExterior = NumExterior
        this.NumerosInterior = NumInterior
        this.colonias = Colonia
        this.CodigosPostal = CodigoPostal
        this.ciudades = Ciudad
        this.Municipios = Municipio
    }


getFormatoCorto() {
    return ` ${this.calles} ${this.NumerosExterior}`
}

getFormatoLargo() {
    return ` ${this.calles}, ${this.NumerosExterior}, ${this.NumerosInterior}, ${this.colonias}, ${this.CodigosPostal}, ${this.ciudades}, ${this.Municipios}`
}
}