/* --------------- Funcion que renderizar la lista de errores --------------- */
function renderizarErrores(listaErrores){
    
    if( listaErrores.length > 0){  // Si hay errores creo una serie de nodos con los errores
        const div = document.createElement('div');
        div.setAttribute('id', 'errores');
        div.classList.add('error');

        listaErrores.forEach(error => {
            console.log(error);
            const p = document.createElement('p');
            p.textContent = error;
            div.appendChild(p);
        });

        formulario.appendChild(div);

        /*       
            let htmlDiv = `<div class="error">`
            listaErrores.forEach(error => {
                htmlDiv = htmlDiv + `<p> ${error}</p>`
            });
            htmlDiv += `</div>`;
            console.log(htmlDiv);
            formulario.innerHTML  += htmlDiv; 
        */
    }

}


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - Mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - Dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - A su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario


function mostrarMensajeExito(listado) {
    // Desarrollar la funcion aqui
}

