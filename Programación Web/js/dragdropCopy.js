document.addEventListener("DOMContentLoaded", (event) => {
  // Obtener iconos
  let iconos = document.querySelectorAll("#lista .elemento");

  // Llamar funciones de los eventos asociados a los iconos
  iconos.forEach(function (icono) {
    icono.addEventListener("dragstart", handleDragStart);
    icono.addEventListener("dragend", handleDragEnd);
  });

  // Obtener destinos de los iconos
  let destinos = document.querySelectorAll(".lista-destino");

  // Llamar funciones de los eventos asociados a los destinos
  destinos.forEach(function (destino) {
    destino.addEventListener(
      "dragenter",
      (e) => {
        e.preventDefault(); // Quitar eventos predefinidos del navegador
      },
      false
    );
    destino.addEventListener(
      "dragover",
      (e) => {
        e.preventDefault(); // Quitar eventos predefinidos del navegador
      },
      false
    );
    destino.addEventListener("drop", handleDrop, false);
  });

  // Función inciar arratre
  function handleDragStart(e) {
    this.style.opacity = "0.4";

    let elemento = e.target; // Obtener elemento icono
    e.dataTransfer.setData("text/html", elemento.getAttribute("id")); // Enviar atributos del elemento icono
  }

  // Función terminar arrastre
  function handleDragEnd(e) {
    this.style.opacity = "1";
  }

  // Función soltar
  function handleDrop(e) {
    e.preventDefault();

    let destino = e.target; // Obtener elemento destino
    let id = e.dataTransfer.getData("text/html"); // obtener atributos del icono

    //let clases = document.getElementById(id).classList; // extraer clases del elemento icono
    let elemento = document.getElementById(id); // extraer clases del elemento icono
    elemento.style.opacity = "1";

    const elemento_nuevo = document.createElement(elemento.tagName); // Crear nuevo elemento

    // Asignar atributos
    elemento_nuevo.id = elemento.id;
    elemento_nuevo.draggable = "true";
    elemento_nuevo.classList = elemento.classList;
    elemento_nuevo.value = elemento.value;
    elemento_nuevo.readOnly = true;

    //destino.innerHTML = "<section class='" + clases + "'></section>"; // Insertar código html
    //destino.innerHTML = elemento.outerHTML;
    destino.appendChild(elemento_nuevo); // Agregar elemento hijo
  }
});
