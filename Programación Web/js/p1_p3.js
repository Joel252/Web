// -- Colorear opciones del catálogo -- 

//Obtener los nodos del DOM
const opciones = document.querySelectorAll('.opcion')
//Recorrer la lista de nodos obtenidos
for(let i = 0 ; i < opciones.length ; i++){
    //Comprobar si es par o impar para asignarle un estilo
    if (i % 2 == 0) {
        opciones[i].classList.add('v1')
    } else {
        opciones[i].classList.add('v2')
    }
}

// -- Buscador --

//Obtener nodo del DOM
const buscador = document.querySelector('#buscador')
//Agregarle un evento al nodo
buscador.addEventListener('keyup', nodo => {
    //Configurar la tecla ESC para que vacíe el contenedor
    if(nodo.key === 'Escape') nodo.target.value=""

    //Comprobar coincidencia del texto del buscador con el de las opciones
    opciones.forEach( opcion => {
        opcion.textContent.toLowerCase().includes(nodo.target.value.toLowerCase())
                ?opcion.classList.remove('filtro') //Lo hace visible
                :opcion.classList.add('filtro') //Lo hace invisible
    })
})

// -- Botones del catálogo --

//Obtener el nodo que funciona como contenedor de las opciones seleccionadas
const tablero = document.querySelector('#tablero-elementos')

//Declarar variable para controlar la cantidad de elementos que hay en el tablero
let n_elementos = 0;
//Reutilizar la lista de nodos obtenida antes y agregarles un evento
opciones.forEach(opcion => {
    //Agregar evento click
    opcion.addEventListener('click', nodo => {
        //Crear un nuevo elemento para el tablero
        const new_elemento = document.createElement('div')
        //Agregar clase al div
        new_elemento.className = 'elemento'

        //Modificar el contador de elementos en el tablero
        n_elementos++

        //Agregar checkbox's
        for ( let i = 1; i <= 3 ; i++ ){
            //Crear input
            const new_checkbox =  document.createElement('input')
            //Asignarle propiedades
            new_checkbox.type = 'checkbox'
            new_checkbox.className = 'tema'
            //Crear id y asignarlo
            const new_id = 'e' + n_elementos + '-t' + i
            new_checkbox.id = new_id
            //Agregar el checkbox como hijo al div
            new_elemento.appendChild(new_checkbox)

            //Crear label
            const new_label =  document.createElement('label')
            //Asignarle propiedades
            new_label.setAttribute("for",new_id)
            new_label.textContent='T' + i
            //Agregar el label como hijo al div
            new_elemento.appendChild(new_label)
        }
        //Crear input tipo text
        const new_text =  document.createElement('input')
        //Asignarle propiedades
        new_text.type = 'text'
        new_text.className = 'text'
        //Agregarle el texto del boton al campo de texto
        new_text.value = nodo.target.textContent
        //Agregar el campo de texto como hijo al div
        new_elemento.appendChild(new_text)
        //Agregar elemento al div "tablero" del DOM
        tablero.appendChild(new_elemento)

        //Agregar evento click al nuevo elemento agregado al tablero
        new_elemento.addEventListener('click', elemento =>{
        //Ir intercalando el evento seleccionado
        elemento.target.classList.toggle('seleccionado')
        })
    })
})

// -- Eliminar elementos --
//Obtener la lista de los nodos seleccionados [Lista dinámica]
const selecionados = document.getElementsByClassName('elemento seleccionado')
//Agregar evento para borrar elementos selecionados
document.addEventListener('keyup', nodo =>{
    if(nodo.key === 'Backspace'){
        //Guardar el tamañor de la lista
        const n = selecionados.length //No se pone en el for porque su valor se auto calcula dinamicamente
        //Recorrer lista de nodos seleccionados
        for(let i = 0 ; i < n ; i++){
            //Eliminar nodo
            selecionados[0].remove()
        }
    }
})