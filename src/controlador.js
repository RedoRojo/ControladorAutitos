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
        for(i = i + 1; i<posicion.length - 1; i++) {
            numero += posicion[i];
        }

        if(this.esNumero(numero)) return Number(numero); 
        else return false; 
    }
     
    obtenerDireccion(posicion) {
        let longitud = posicion.length
        let direccion = posicion[longitud-1]
        
        if(direccion === "E" || direccion === "S" || direccion === "N" || direccion === "O") return direccion; 
        else return false; 
    }

    validarCoordenada(posicion) {
        let correcta = true; 

        if(this.obtenerCoordenaX(posicion) === false ||
            this.obtenerCoordenaY(posicion) === false ||
            this.obtenerDireccion(posicion) === false 
        ) correcta = false; 

        return correcta; 
    }

    esNumero(texto) { 
        return !isNaN(texto); 
    }

}
