import Controlador from "./controlador";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#controlador-form");
const pos_inicial = document.querySelector("#pos-inicial"); 
const sec_comandos = document.querySelector("#sec-comandos")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  controlador = new Controlador(); 

  if(controlador.validarCoordenada(comandos.value))  {
    pos_inicial.innerHTML = comandos.value; 
  }else {
    alert("Ingrese una posicion inicial correcta"); 
  }

  

});
