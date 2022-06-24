// Obtener elementos
let btn_comenzar = document.getElementById("btn-comenzar");
let pre_plan = document.querySelector(".pre-plan");

btn_comenzar.addEventListener("click", (e) => {
  pre_plan.style.display = "none"; // Esconder elemento
});
