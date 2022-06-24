// Obtener elementos
let outputs = document.querySelectorAll("input[type='number']");
let ranges = document.querySelectorAll("input[type='range']");
const totalHoras = 48;

 // Llamar funciones de los eventos
ranges.forEach((element) => {
  element.addEventListener("input", (e) => {
    actualizarRanges(element);
  });
});

// Actulizar output numérico
function actualizarOutput(element) {
  outputs.forEach((e) => {
    if (element.classList.contains(e.classList)) {
      e.value = element.value;
    }
  });
}

// Actualizar el valor del input range ht
function actualizarHt(element, ht) {
  if (element.classList.contains("hi")) {
    ht.value = element.value * 0.8;
  } else if (element.classList.contains("hp")) {
    ranges.forEach((hi) => {
      if (hi.classList.contains(element.classList[0]) && hi.classList.contains("hi")) {

        let ht_value = parseInt(ht.value, 10);
        let element_value = parseInt(element.value, 10);
        let value =  + ht_value + element_value;

        if (hi.value < value && (hi.value < ht_value || hi.value < element_value)) {
          hi.value = value;
          actualizarHis(hi);
        }
        ht.value = parseInt(hi.value, 10) - element_value;
      }
    });
  }
}

// Actualizar el valor del input range hp
function actualizarHp(element, hp) {
  if (element.classList.contains("hi")) {
    hp.value = element.value * 0.2;
  } else if (element.classList.contains("ht")){
    ranges.forEach((hi) => {
      if (hi.classList.contains(element.classList[0]) && hi.classList.contains("hi")) {

        let hp_value = parseInt(hp.value, 10);
        let element_value = parseInt(element.value, 10);
        let value =  + hp_value + element_value;

        if (hi.value < value && (hi.value < hp_value || hi.value < element_value)) {
          hi.value = value;
          actualizarHis(hi);
        }
        hp.value = parseInt(hi.value, 10) - element_value;
      }
    });
  }
}

// Actualizar el valor de todos los inputs range hi
function actualizarHis(element) {
  ranges.forEach((e) => {
    if (!e.classList.contains(element.classList[0])) {
      if (e.classList.contains("hi") && element.classList.contains("hi")) {
        let value = totalHoras - element.value;
        e.value = value / ((ranges.length - 3) / 3);
      }
    }
  });
}

// Determinar a que función de actualización llamar
function actualizarRanges(element) {
  ranges.forEach((e) => {
    if (e.classList.contains(element.classList[0])) {
      if (e.classList.contains("ht") && !element.classList.contains("ht")) {
        actualizarHt(element, e);
      } else if (e.classList.contains("hp") && !element.classList.contains("hp")) {
        actualizarHp(element, e);
      }
    } else {
      actualizarHis(element);
    }
    actualizarOutput(e);
  });
}