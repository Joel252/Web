// Obtener inputs
let numTarjeta = document.getElementById("numTarjeta");
let nip = document.getElementById("nip");
let btn = document.getElementById("btnEnviar");

numTarjeta.addEventListener("focusout", (e) => {
  if (numTarjeta.value === "") {
    numTarjeta.classList.add("error"); // Añadir la clase error
    numTarjeta.placeholder = "Número de tarjeta incorrecto"; // Mostrar texto del error
  } else {
    numTarjeta.classList.remove("error"); // Asignar clase predefinida
    numTarjeta.placeholder = "Número de tarjeta"; // Asignar texto predefinido
  }
});

nip.addEventListener("focusout", (e) => {
  if (nip.value === "") {
    nip.classList.add("error"); // Añadir la clase error
    nip.placeholder = "NIP incorrecto"; // Mostrar texto del error
  } else {
    nip.classList.remove("error"); // Asignar clase predefinida
    nip.placeholder = "NIP"; // Asignar texto predefinido
  }
});
