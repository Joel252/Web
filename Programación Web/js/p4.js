// -- Intercambio entre pestañas --

//Obtener listas de nodos
const pestañas = document.querySelectorAll('.pestaña')
const contenidos = document.querySelectorAll('.contenido')

//Recorrer lista de pestañas
pestañas.forEach( (nodo, indice) => {
    //Agregar evento de tipo click a las pestañas
    nodo.addEventListener('click', () => {
        //Hacer que al hacer click a la pestaña desactive todo los elementos con la clase activo
        contenidos.forEach( contenido => {
            contenido.classList.remove('activo')
        })
        //Hacer que al hacer click a la pestaña desactive todo los elementos con la clase activo
        pestañas.forEach( pestaña => {
            pestaña.classList.remove('activo')
        })
        //Agregar estado activo al elemento que se preciono
        pestañas[indice].classList.add('activo')
        contenidos[indice].classList.add('activo')
    })
})

// -- Agregar indicadores --

//Obtener el nodo que agregará indicadores
const agregar = document.querySelector(".icono")

//Agregar el evento click al nodo
agregar.addEventListener('click', () =>{
    //Obtener el nodo contenedor de los indicadores que esta activo
    const activo = document.querySelector(".contenido.activo")
    //Comprobar si la lista esta vacia
    if(activo !== null){
        //Crear nuevo componente
        const new_indicador = document.createElement('div')
        //Asignarle propiedades
        new_indicador.className = 'indicador'

        //Crear nuevo pad
        const new_pad = document.createElement('i')
        //Asignarle propiedades
        new_pad.className = 'pad'

        //Crear text área
        const new_text = document.createElement('textarea')
        //Asignarle propiedades
        new_text.className = 'descripción'

        //Crear peso
        const new_peso = document.createElement('div')
        //Asignarle propiedades
        new_peso.className = 'peso'

        //Crear componenetes del peso
        const new_inc = document.createElement('i')
        //Asginarle propiedades
        new_inc.className = 'incremento'
        const new_numero = document.createElement('input')
        //Asginarle propiedades
        new_numero.type = 'number'
        new_numero.className = 'numero'
        new_numero.value = 0
        new_numero.min = 0
        new_numero.max = 100
        const new_des = document.createElement('i')
        //Asginarle propiedades
        new_des.className = 'decremento'

        //Ensamblar indicador
        new_peso.appendChild(new_inc)
        new_peso.appendChild(new_numero)
        new_peso.appendChild(new_des)
        new_indicador.appendChild(new_pad)
        new_indicador.appendChild(new_text)
        new_indicador.appendChild(new_peso)

        //Añadir indicador al contenedor
        activo.appendChild(new_indicador)

        // -- Eventos --

        //Agregar evento click al nuevo elemento agregado al tablero
        new_pad.addEventListener('click', nodo =>{
            //Ir intercalando el evento seleccionado
            nodo.target.classList.toggle('seleccionado')
            nodo.target.parentNode.classList.toggle('seleccionado')
        })

        //Agregar evento click a las flechas
        new_inc.addEventListener('click', nodo =>{
            //Llamar a la función que se encarga de modificar el valor del peso
            mod_peso({nodo:nodo.target.nextSibling,tipo:1})
        })

        new_des.addEventListener('click', nodo =>{
            //Llamar a la función que se encarga de modificar el valor del peso
            mod_peso({nodo:nodo.target.previousSibling,tipo:2})
        })
    }
})

//Función que permite modificar el peso
function mod_peso ({nodo,tipo}){
    //Comprobar si tiene que aumentar o decrementar
    if (tipo === 1){
        nodo.value < 100 ? nodo.value = parseInt(nodo.value) + 1 : null
    }else{
        nodo.value > 0 ? nodo.value = parseInt(nodo.value) - 1 : null
    }

}

// -- Eliminar nodos --

//Agregar evento para borrar elementos selecionados
document.addEventListener('keyup', nodo =>{
    //Comprobar que la tecla presionada sea la de borrar
    if(nodo.key === 'Backspace'){
        //Obtener lista de elementos seleccionados
        const contenido = document.querySelectorAll('.contenido.activo .indicador.seleccionado')//.children
        //Recorrer lista
        contenido.forEach( indicador => {
            //Eliminar elemento
            indicador.remove()
        })
    }
})

