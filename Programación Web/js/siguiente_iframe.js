// Obtener elementos
let btn = document.getElementById("btn-siguiente");
let srcs = document.querySelectorAll(".progreso a");
let progreso = document.querySelectorAll(".progreso");

btn.addEventListener("click", (e) => {
  // Obtner elemento iframe
  let iframe = document.getElementById("i-tabla");

  //Determinar en que paso se encuentra
  for (let i = 0; i < srcs.length; i++) {
    progreso[i].classList.remove("activo"); // Añadir clase ccmpletado
    progreso[i].classList.add("completado"); // Añadir clase ccmpletado
    
    if (srcs[i].href == iframe.src) {
      progreso[i + 1].classList.add("activo"); // Añadir clase activo
      iframe.src = srcs[i + 1].href; // Cambiar src del elemento
      break; // Terminar recorrido
    }
  }
});
