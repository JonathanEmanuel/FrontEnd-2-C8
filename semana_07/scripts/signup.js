window.addEventListener('load', function () {
    /* ---------------------- Obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const nombre = document.querySelector('#inputNombre');
    const apellido = document.querySelector('#inputApellido');
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const url = 'http://todo-api.ctd.academy:3000/v1';


    

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Creamos el cuerpo de la request
        const datos = {
            firstName: nombre.value,
            lastName: apellido.value, 
            email: email.value,
            password: password.value
        };
        //configuramos la request del Fetch
        const config = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // Lanzamos la consulta de login a la API
        realizarRegister(config);

        // Limpiamos los campos del formulario
        form.reset();

    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        console.log("Lanzando la consulta a la API");
        fetch(`${url}/users`, settings)
            .then(response => {
                console.log(response);

                if (response.ok != true) {
                    alert("No se realizo el registro.")
                }

                return response.json();

            })
            .then(data => {
                console.log("Promesa cumplida:");
                console.log(data);

                if (data.jwt) {
                    // Guardamos en LocalStorage el objeto con el token
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));

                    // Redireccionamos a la página de tareas
                    location.replace('mis-tareas.html');
                }
                
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
    };

});