import Controlador from "./controlador";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#controlador-form");
const pos_inicial = document.querySelector("#pos-inicial"); 
const pos_final = document.querySelector("#pos-final"); 
const sec_comandos = document.querySelector("#sec-comandos"); 
const dimen = document.querySelector("#dimensiones"); 
const comando = document.querySelector("#comando-button"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  controlador = new Controlador(comandos.value); 

  coordenada_inicial = controlador.obtenerCoordenadaInicial(comandos.value); 
  secuencia = controlador.obtenerSecuenciaDeComandos(comandos.value); 
  dimensiones = controlador.obtenerDimensiones(comandos.value); 

  if(controlador.validarCoordenada(coordenada_inicial))  {
    pos_inicial.innerHTML = coordenada_inicial; 
  }else {
    alert("Ingrese una posicion inicial correcta"); 
  }

  if(controlador.validarSecuencia(secuencia)) {
    sec_comandos.innerHTML = secuencia; 
  } else {
    alert("ingrese una secuencia de comandos correcta"); 
  }

  if(controlador.validarDimensiones(dimensiones)) {
    dimen.innerHTML = dimensiones; 
  } else { 
    alert("Ingrese unas dimesiones para la superficie validas"); 
  }

  pos_final.innerHTML = controlador.ejecutarSecuencia(); 
});
