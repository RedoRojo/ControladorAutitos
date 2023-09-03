
const comandos = document.querySelector("#comandos");
const form = document.querySelector("#controlador-form");
const pos_inicial = document.querySelector("#pos-inicial"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  pos_inicial.innerHTML = comandos.value; 

});
