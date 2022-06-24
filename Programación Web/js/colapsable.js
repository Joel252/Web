// Obtener elementos que componene el desplegable
let colapsable = document.getElementById("colapsable");
let contenedor = document.getElementById("contenedor");

colapsable.addEventListener("click", (e) => {
  if (contenedor.style.maxHeight) {
    contenedor.style.maxHeight = null; // Quitar altura máxima
    contenedor.style.paddingTop = null; // Quitar padding superior
    contenedor.style.paddingBottom = null; // Quitar padding inferior
  } else {
    contenedor.style.maxHeight = contenedor.scrollHeight + 63 + "px";
    contenedor.style.paddingBottom = "15px"; // Asignar nuevo padding inferior
    contenedor.style.paddingTop = "15px"; // Asignar nuevo padding superior
  }
});
