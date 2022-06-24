// Obtener elementos de la barra de progreso
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const cuatro = document.querySelector(".cuatro");
const cinco = document.querySelector(".cinco");
const seis = document.querySelector(".seis");
const siete = document.querySelector(".siete");
const ocho = document.querySelector(".ocho");

// Listar elementos
let lista = [uno, dos, tres, cuatro, cinco, seis, siete, ocho];

// Eventos que llaman a las funciones
uno.addEventListener("click", (e) => {
  quitarClases(0);
  addClases(0);
  uno.classList.add("activo"); // Asignar clase 'activo'
});

dos.addEventListener("click", (e) => {
  quitarClases(1);
  addClases(1);
  dos.classList.add("activo"); // Asignar clase 'activo'
});

tres.addEventListener("click", (e) => {
  quitarClases(2);
  addClases(2);
  tres.classList.add("activo"); // Asignar clase 'activo'
});

cuatro.addEventListener("click", (e) => {
  quitarClases(3);
  addClases(3);
  cuatro.classList.add("activo"); // Asignar clase 'activo'
});

cinco.addEventListener("click", (e) => {
  quitarClases(4);
  addClases(4);
  cinco.classList.add("activo"); // Asignar clase 'activo'
});

seis.addEventListener("click", (e) => {
  quitarClases(5);
  addClases(5);
  seis.classList.add("activo"); // Asignar clase 'activo'
});

siete.addEventListener("click", (e) => {
  quitarClases(6);
  addClases(6);
  siete.classList.add("activo"); // Asignar clase 'activo'
});

ocho.addEventListener("click", (e) => {
  quitarClases(7);
  addClases(7);
  ocho.classList.add("activo"); // Asignar clase 'activo'
});

// Función que elimina las clases asignadas
function quitarClases(n_elemento) {
  lista[n_elemento].classList.remove("completado");
  for (var i = 7; i > n_elemento; i--) {
    lista[i].classList.remove("activo");
    lista[i].classList.remove("completado");
  }
}

// Función que añade la clase 'completado'
function addClases(n_elemento) {
  for (var i = 0; i < n_elemento; i++) {
    lista[i].classList.add("completado");
  }
}
