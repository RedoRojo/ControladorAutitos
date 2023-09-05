import Controlador from "./controlador";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#controlador-form");
const pos_inicial = document.querySelector("#pos-inicial"); 
const sec_comandos = document.querySelector("#sec-comandos")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  controlador = new Controlador(); 

  coordenada_inicial = controlador.obtenerCoordenadaInicial(comandos.value); 
  secuencia = controlador.obtenerSecuenciaDeComandos(comandos.value); 

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


});
