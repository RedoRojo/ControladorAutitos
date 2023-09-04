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
        let i = 0;
        let numero = "";
        for(i = 0; i<posicion.length; i++) {
            if(posicion[i] === ',') break; 
        }

        numero += posicion[i+1]; 
        return Number(numero)
    }

    esNumero(texto) { 
        return !isNaN(texto); 
    }

}
