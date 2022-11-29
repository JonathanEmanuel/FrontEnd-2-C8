// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
let token = localStorage.getItem('jwt')
if(  ! token ) {
  location.replace('index.html');
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const userName = document.querySelector('.user-info p')
  const btnCerrarSesion = document.querySelector('#closeApp');

  console.log(userName, btnCerrarSesion);

  obtenerNombreUsuario();
  consultarTareas();
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */
  // Elimina el jwt y voy al index.html
  btnCerrarSesion.addEventListener('click', function () {
    if( confirm('¿Desar Salir de la APP?')){
      localStorage.clear();
      location.replace('index.html');
    }

  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    console.log('GetMe');
    const endPoint = 'http://todo-api.ctd.academy:3000/v1/users/getMe';
    const config = {
      method: 'GET',
      headers: {
        authorization: token,
        'Content-type': 'application/json',
      }
    }

    fetch(endPoint, config).then( response => {  return response.json() })
    .then( respJSON => {
      console.log( respJSON);
      user = respJSON;
      userName.textContent = respJSON.firstName;

    }).catch( error => {
      alert('upss tenemos un error :(');
    })

  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    
    const endPoint = 'http://todo-api.ctd.academy:3000/v1/tasks';
    const config = {
      method: 'GET',
      headers: {
        authorization: token,
        'Content-type': 'application/json',
      }
    }

    fetch(endPoint, config).then( response => response.json() )
    .then( respJSON => {
      console.log( respJSON);

    }).catch( error => {
      alert('upss tenemos un error la consultar las tareas :(');
      console.error(error);
    })



  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});