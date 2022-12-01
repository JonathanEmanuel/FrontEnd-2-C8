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
  const formCrearTarea = document.querySelector('.nueva-tarea');
  const tareasPendientes = document.querySelector('.tareas-pendientes');
  const tareasTerminadas = this.document.querySelector('.tareas-terminadas');
  
  const url = 'http://todo-api.ctd.academy:3000/v1';

  //console.log(userName, btnCerrarSesion);

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
    const endPoint = `${url}/users/getMe`;
    const config = {
      method: 'GET',
      headers: {
        authorization: token,
        'Content-type': 'application/json',
      }
    }

    fetch(endPoint, config).then( response => {  return response.json() })
    .then( respJSON => {
      //console.log( respJSON);
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
    
    const endPoint = `${url}/tasks`;

    const config = {
      method: 'GET',
      headers: {
        authorization: token,
        'Content-type': 'application/json',
      }
    }

    fetch(endPoint, config).then( response => response.json() )
    .then( respJSON => {
      //console.log( respJSON);
      renderizarTareas(respJSON);
    }).catch( error => {
      alert('upss tenemos un error la consultar las tareas :(');
      console.error(error);
    })



  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    console.log('Evento del form');




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    listado[0].completed = !listado[0].completed;



    console.log(listado)

    console.log('tasks', listado);
    tareasPendientes.innerHTML = '';
    tareasTerminadas.innerHTML = '';

    listado.forEach(task => {

        const fecha =  new Date( task.createdAt).toLocaleString();

        if( task.completed == false ){
          tareasPendientes.innerHTML +=  // html
            `<li class="tarea">
              <button type="button" title="Completar tarea" class="change" id="${task.id}"><i class="fa-regular fa-circle"></i></button>
              <div class="descripcion">
                <p class="nombre">${task.description}</p>
                <p class="timestamp">${fecha}</p>
              </div>
            </li>`;
        } else {
          tareasTerminadas.innerHTML += // html
              `<li class="tarea">
                <div class="hecha">
                  <i class="fa-regular fa-circle-check"></i>
                </div>
                <div class="descripcion">
                  <p class="nombre">${task.description}</p>
                  <div class="cambios-estados">
                    <button type="button" title="Cambiar estado" class="change incompleta" id="${task.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                    <button type="button" title="Eliminar tarea" class="borrar" id="${task.id}"><i class="fa-regular fa-trash-can"></i></button>
                  </div>
                </div>
              </li>`
        }

    });

    // Cuando se rederizo los tareas
    const btnDelets = document.querySelectorAll('.borrar');
    console.log(btnDelets);

    btnDelets.forEach(btn => {
      btn.addEventListener('click', function (e) {
        botonBorrarTarea(e.target.id);
        
      })
    });



    //botonBorrarTarea();


  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea(id) {
    console.log('eliminado tarea', id);


    const endPoint = `${url}/tasks/${id}`;
    const config = {
      method: 'DELETE',
      headers: {
        authorization: token,
        'Content-type': 'application/json'

      }
    }

    fetch( endPoint, config ).then( response => {
        if(  response.ok == false){
          alert('Ups algo salio mal');
          return;
        }
        console.log(response);
        response.json();
      })
      .then( resJSON => {
        console.log(resJSON);
        consultarTareas();
      })
      .catch( error => {
        console.error('ERROR' , error);
      })

  };

});