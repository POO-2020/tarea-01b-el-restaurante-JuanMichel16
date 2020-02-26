export default class Tiempo {

    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */
    constructor(hora, minutos, periodo) {
        this.horas = hora
        this.minutos = minutos
        this.periodos = periodo
    }

    getFormato12(){
        return `${this.horas}: ${this.minutos} ${this.periodos}`
    }

    getFormato24(){
        if(this.periodos == "pm"){
            let newhora = ` ${this.horas + 12} : ${this.minutos} ${this.periodos}`
            return `${newhora}`
        }else {
            return `${this.horas}: ${this.minutos} ${this.periodos}`
        }
    }

}