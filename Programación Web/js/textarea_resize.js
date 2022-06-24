// Obtner y recorrer elementos
document.querySelectorAll("textarea").forEach((element) => {
  element.addEventListener("input", () => {
    element.style.height = ""; // Vaciar altura
    element.style.height = element.scrollHeight + "px"; // Asignar nueva altura

    if (element.value == "") {
      element.style.height = "100%"; // Asignar altura predefinida
    }
  });
});
