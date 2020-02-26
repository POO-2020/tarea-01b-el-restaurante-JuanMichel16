export default class Fecha {

    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año) {
        this.fechas = new Date (dia, mes, año)
        this.dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    }

getAños() {
    let añosCumplidos
    añosCumplidos = 2020 - this.fechas.getFullYear()
    return `${añosCumplidos}`
}

getMeses() {
    let mesesCumplidos
    mesesCumplidos = getAños() * 12
    return `${mesesCumplidos}`
}

getSemanas() {
    let semanasCumplidas
    semanasCumplidas = getMeses() * 4
    return `${semanasCumplidas}`
}

getDias() {
    let diasCumplidos
    diasCumplidos = getSemanas() * 7
    return ` ${diasCumplidos} `
}

getFecha() {
    let mesDelAño = this.meses[this.fechas.getMonth()]
    return `${this.fechas.getdate()} / ${mesDelAño} / ${this.fechas.getFullYear()}`
}

getDiaFecha() {
    let diaAño = this.dias[this.fechas.getDay()]
    return ` ${diaAño}`
}
}