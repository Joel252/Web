// Obtener elementos
let btn_add = document.getElementById("btn-add");
let contenedor = document.querySelector(".contenedor-eval");

btn_add.addEventListener("click", (e) => {
  const text = document.createElement("textarea"); // Crear elemento textarea

  // Asignar atributos
  text.id = "eval-" + contenedor.childElementCount;
  text.draggable = "true";
  text.classList = "evaluacion texto elemento";

  contenedor.appendChild(text); // insertar en el contenedor
});
