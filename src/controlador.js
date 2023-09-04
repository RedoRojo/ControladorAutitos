export default class Controlador {
    constructor(comandos = "") {
        this.comandos = comandos; 
    }

    obtenerCoordenaX(posicion) {
        if(this.esNumero(posicion[0])) {
            return Number(posicion[0]); 
        }else 
            return false; 
    }

    esNumero(caracter) { 
        if(typeof caracter !== 'string') {
            return false; 
        }

        if(caracter.trim() === '') {
            return false; 
        }

        return !isNaN(caracter); 
    }

}
