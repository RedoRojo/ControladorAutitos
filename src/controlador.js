export default class Controlador {
    constructor(comandos = "1000,1000/0,0N/A") {
        this.comandos = comandos; 
        this.dimensiones = this.obtenerDimensiones(comandos); 
        this.limiteX = this.obtenerCoordenaX(this.dimensiones);  
        this.limiteY = this.obtenerCoordenaY(this.dimensiones + "N"); 
        this.posicion = this.obtenerCoordenadaInicial(comandos); 
        this.secuencia = this.obtenerSecuenciaDeComandos(comandos); 
    }

    obtenerDimensiones(cadena) {
        let dimensiones = ""; 
        for(let i = 0; i < cadena.length; i++) {
            if(cadena[i] == "/") break; 
            dimensiones += cadena[i]; 
        }
        return dimensiones; 
    }
     
    obtenerCoordenadaInicial(cadena) {
        let i = 0; 
        let coordenada = "";   
        for(i = 0; i<cadena.length; i++) {
            if(cadena[i] === "/") break; 
        }    

        for(i = i + 1; i<cadena.length; i++) { 
            if(cadena[i] === "/") break; 
            coordenada+=cadena[i];
        }

        return coordenada; 
    }

    obtenerSecuenciaDeComandos(cadena) {
        let i = cadena.length - 1; 
        let secuencia = "";   
        for(i; i>=0; i--) {
            if(cadena[i] === "/") break; 
        }    

        for(i = i + 1; i<cadena.length; i++) secuencia+=cadena[i];

        return secuencia; 
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
    
    validarSecuencia(secuencia) { 
        let correcta = true; 

        for(let i = 0; i<secuencia.length; i++) { 
            if(secuencia[i] != "I" &&
                secuencia[i] != "A" &&
                secuencia[i] != "D"
            ) {
                correcta = false; 
                break;
            }
        }

        return correcta; 
    }
    
    validarDimensiones(dimensiones) {
        let i = 0; 

        let correcta = true; 
        for(i = 0; i<dimensiones.length; i++) {
            if(dimensiones[i] == ",") break; 
        }

        if(i == dimensiones.length) {
            correcta = false;  
        } else {
            let primer_numero = ""; 
            let segundo_numero = ""; 
            for(let j = 0; j<i; j++) { 
                primer_numero += dimensiones[j];
            }
            for(i = i + 1; i<dimensiones.length; i++) {
                segundo_numero += dimensiones[i];
            }

            if(this.esNumero(primer_numero) && this.esNumero(segundo_numero)) correcta = true; 
            else correcta = false; 
            
        }


        return correcta; 
    }

    ejecutarComandoI(posicion) {
        let direccion = this.obtenerDireccion(posicion); 
        let nueva_pos = "";
        nueva_pos += String(this.obtenerCoordenaX(posicion)); 
        nueva_pos += ','; 
        nueva_pos += String(this.obtenerCoordenaY(posicion)); 
        switch (direccion) {
            case 'N': 
                direccion = 'O'; 
                break; 
            case 'E': 
                direccion = 'N';
                break; 
            case 'S': 
                direccion = 'E'; 
                break; 
            case 'O': 
                direccion = 'S'; 
                break; 
        }

        nueva_pos += direccion; 
        return nueva_pos; 
    }
    
    ejecutarComandoD(posicion) {
        let direccion = this.obtenerDireccion(posicion); 
        let nueva_pos = "";
        nueva_pos += String(this.obtenerCoordenaX(posicion)); 
        nueva_pos += ','; 
        nueva_pos += String(this.obtenerCoordenaY(posicion)); 
        switch (direccion) {
            case 'N': 
                direccion = 'E'; 
                break; 
            case 'E': 
                direccion = 'S';
                break; 
            case 'S': 
                direccion = 'O'; 
                break; 
            case 'O': 
                direccion = 'N'; 
                break; 
        }

        nueva_pos += direccion; 
        return nueva_pos; 
    }

    ejecutarComandoA(posicion) {
        let direccion = this.obtenerDireccion(posicion); 
        let pos_x = this.obtenerCoordenaX(posicion); 
        let pos_y = this.obtenerCoordenaY(posicion); 
        let nueva_pos = ""; 

        
        switch (direccion) {
            case 'N': 
                pos_y++; 
                break; 
            case 'E': 
                pos_x++;
                break; 
            case 'S': 
                pos_y--;
                break; 
            case 'O': 
                pos_x--;
                break; 
        }

        nueva_pos = (String(pos_x) + "," + String(pos_y) + direccion); 

        if(this.posicionValida(nueva_pos)) {
            return nueva_pos; 
        }

        return posicion; 

    }

    ejecutarSecuencia() {
        return "0,2E"; 
    }

    posicionValida(posicion) {
        let pos_x = this.obtenerCoordenaX(posicion); 
        let pos_y = this.obtenerCoordenaY(posicion); 
        let valida = true; 
        if(pos_x < 0 || pos_x > this.limiteX) valida = false; 
        if(pos_y < 0 || pos_y > this.limiteY) valida = false; 
        return valida; 
    }

    esNumero(texto) { 
        return !isNaN(texto); 
    }

}
