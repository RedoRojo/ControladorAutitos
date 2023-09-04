export default class Controlador {
    constructor(comandos = "") {
        this.comandos = comandos; 
    }

    obtenerCoordenaX(posicion) {
        return Number(posicion[0]); 
    }

}
