/* -------------------------------------------------------------------------- */
/*                [1] FUNCION: esperamos la carga de la ventana               */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function () {

    const formulario = this.document.querySelector('form')

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        postearComentario();
    })
})

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: capturamos los datos del form                 */
/* -------------------------------------------------------------------------- */
function capturarDatos() {
    const titulo = document.querySelector('#titulo');
    const comentario = document.querySelector('#comentario');

    // Construir un objeto con el formato solicitado por la API
    let objeto = {
        title: titulo.value,
        body: comentario.value,
        userId: 1
    }

    return objeto;
}

/* -------------------------------------------------------------------------- */
/*                    [3] FUNCION: enviar(postear) a la API                   */
/* -------------------------------------------------------------------------- */
// Nos basamos en la documentacion de la API:
// https://jsonplaceholder.typicode.com/guide/
function postearComentario() {
    const datos = capturarDatos();
    const endPoint = 'https://jsonplaceholder.typicode.com/posts';
    //let varGlobal;
    const config = {
        method: 'POST',
        body: JSON.stringify( datos ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }

    console.log(datos);

    fetch(endPoint, config).then( response => {
        console.log(response);
        //console.log(response.status);
        return response.json();
    })
    .then( function(json) {
        console.log(json);
        //varGlobal = json;
        renderizarRespuesta(json );
    })
    .catch( error => {
        console.error('Ups ocurrio un error ', error)
    })
    // No se muestran los datos, porqu hay que esperar el tiempo respuesta
    //console.log(varGlobal)
}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: renderizar respuesta                     */
/* -------------------------------------------------------------------------- */

function renderizarRespuesta(datos) {
    const contenedor = document.querySelector('.respuesta');
    const template = `<p> Datos Recibido </p>
                        <p> Title:  ${ datos.title }</p>
                        <p> Body:  ${ datos.body }</p>
                        <p> Id:  ${ datos.id }</p>`;
    contenedor.innerHTML = template;

}


/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// En este caso vamos a trabajar la conexion con APIS,
// en el siguiente DOC vamos a poder ver nuestra tarea
// 