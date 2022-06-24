document.addEventListener("DOMContentLoaded", (event) => {
  let lista = document.querySelectorAll("#lista .box");

  // Llamar funciones de los eventos
  lista.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragend", handleDragEnd);
    item.addEventListener("drop", handleDrop);
  });

  // Función inciar arratre
  function handleDragStart(e) {
    this.style.opacity = "0.4";

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  // Función terminar arrastre
  function handleDragEnd(e) {
    this.style.opacity = "1";
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  // Función soltar
  function handleDrop(e) {
    e.stopPropagation();

    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }

    return false;
  }
});
