export default class Controlador {
    constructor(comandos = "") {
        this.comandos = comandos; 
    }

    obtenerCoordenaX(posicion) {
        let numero = ""; 

        for(let i = 0; i<posicion.length; i++) {
            if(posicion[i] === ',') break; 
            numero += posicion[i];
        }
        
        if(this.esNumero(numero)) return  Number(numero)
        else return false; 
    }
    
    obtenerCoordenaY(posicion) { 
        return 2;
    }

    esNumero(texto) { 
        return !isNaN(texto); 
    }

}
