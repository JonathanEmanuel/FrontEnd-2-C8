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
  const tareasTerminadas = document.querySelector('.tareas-terminadas');
  const body = document.querySelector('body');

  const url = 'http://todo-api.ctd.academy:3000/v1';

  //console.log(userName, btnCerrarSesion);

  obtenerNombreUsuario();
  consultarTareas();
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */
  // Elimina el jwt y voy al index.html
  btnCerrarSesion.addEventListener('click', function () {



    Swal.fire({
      title: '¡Desea salir de la app?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar', 
      denyButtonText: `Don't save`,
    }).then((result) => {

      console.log(result);
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.clear();
        location.replace('index.html');

      } else if (result.isDenied) {
        
      }
    })




   /*  if( confirm('¿Desar Salir de la APP?')){
      localStorage.clear();
      location.replace('index.html');
    }
 */
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

    fetch(endPoint, config)
    .then( response => {  
      console.info('Response',response)  
      return response.json()
     })
    .then( json => {
      console.log('Algo legible', json);
      user = json;
      userName.textContent = json.firstName;

    }).catch( error => {
      alert('upss tenemos un error :(');
    })

  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    
    mostrarLoading();
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
      renderizarTareas(respJSON);

    }).catch( error => {

      Swal.fire(
        'To Do',
        'upss tenemos un error la consultar las tareas :(',
        'error'
      );
      //alert('upss tenemos un error la consultar las tareas :(');
      console.error(error);

    }).finally( () => {
        ocultarLoading();
    });

  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Evento del form');

    const endPoint = `${url}/tasks`;

    const datos = {
      description: nuevaTarea.value.trim()
    };

    const config = {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    }

    console.log("Creando un tarea en la base de datos");
    fetch(endPoint, config)
      .then(response => response.json() )
      .then(tarea => {
          console.log(tarea)
        consultarTareas();
      })
      .catch(error => console.log(error));


    //limpiamos el form
    formCrearTarea.reset();


  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
  
    console.log(listado)

    console.log('tasks', listado);
    tareasPendientes.innerHTML = '';
    tareasTerminadas.innerHTML = '';

    listado.forEach(task => {

        const fecha =  new Date( task.createdAt).toLocaleString();

        if( task.completed == false ){
          tareasPendientes.innerHTML +=  // html
            `<li class="tarea" data-aos="flip-up">
              <button type="button" title="Completar tarea" class="change" id="${task.id}"><i class="fa-regular fa-circle"></i></button>
              <div class="descripcion">
                <p class="nombre">${task.description}</p>
                <p class="timestamp">${fecha}</p>
              </div>
            </li>`;
        } else {
          tareasTerminadas.innerHTML += // html
              `<li class="tarea" data-aos="zoom-in">
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

    // Selecciono todos los botones de cambio de estado (check verde) y agrego el listener
    const btnCompleted = document.querySelectorAll('.change');
        

    btnCompleted.forEach(btn => {
      btn.addEventListener('click', function (e) {
        
        //llamo a la funcion de cambio de estado enviando el elemento HTML 
        // (boton completo) en el que se hizo click
        botonesCambioEstado(e.target);
        
      })
    });


    //botonBorrarTarea();


  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado(boton) {
    
    // preparo los datos para el PUT
    let data;
    if(boton.classList.contains('incompleta')){
      // cambiar completed = false
      data = {"completed" : false}
    }else{
      // cambiar completed = true
      data = {"completed" : true}
    }
    

    const endPoint = `${url}/tasks/${boton.id}`;
    const config = {
      method: 'PUT',
      headers: {
        authorization: token,
        'Content-type': 'application/json'

      },
      body: JSON.stringify(data),
    }

    fetch( endPoint, config ).then( response => {
        if(  response.ok == false){
          alert('Ups algo salio mal');
          return;
        }
        response.json();
      })
      .then( resJSON => {
        // si todo salió bien llamo a consultar tareas para que vuelva a renderizar todas las tareas
        consultarTareas();
      })
      .catch( error => {
        console.error('ERROR' , error);
      })





  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea(id) {

    Swal.fire({
      title: '¿Confirma eliminar la tarea?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar', 
      denyButtonText: `Don't save`,
    }).then((result) => {

      console.log(result);
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
  
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


      } else if (result.isDenied) {
        
      }
    })




    

  };


  function ocultarLoading(){
    body.classList.add('loaded');
  }

  function mostrarLoading(){
    body.classList.remove('loaded');
  }

});