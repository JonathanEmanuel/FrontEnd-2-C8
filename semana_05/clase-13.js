/* --------------------------- Estados por default -------------------------- */
const estadoUsuario = {
    email: '',
    password: '',
    rol: '',
    terminos: false
}

const estadoErroresOK = {
    email: false,
    password: false,
    rol: false,
    terminos: false
}


/* ---------------------------------- nodos --------------------------------- */
// Capturamos todos los elementos que necesitamos
const formulario = document.querySelector('form');

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');

chequearUsuarioValido();

/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */
function mostrarErrores() {
    // Version con IFs
    if( estadoErroresOK.email ){
        emailError.classList.add('visible');
    } else {
        emailError.classList.remove('visible');
    }

    estadoErroresOK.password ? passwordError.classList.add('visible') : passwordError.classList.remove('visible');
    estadoErroresOK.rol ? rolError.classList.add('visible') : rolError.classList.remove('visible');
    (estadoErroresOK.terminos) ? terminosError.classList.add('visible') : terminosError.classList.remove('visible');

}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */
formulario.addEventListener('change', function(){
    console.log('Algo cambio')
    // Normalizar los datos antes de agregarlos al objeto

    estadoUsuario.email = inputEmail.value;
    estadoUsuario.password = inputPassword.value;
    estadoUsuario.rol = inputRol.value;
    estadoUsuario.terminos = inputTerminos.checked; 

    // Actualizo los estados
    estadoErroresOK.email = validarEmail(estadoUsuario.email);
    estadoErroresOK.password = validarPassword(estadoUsuario.password);
    estadoErroresOK.rol = validarRol( estadoUsuario.rol);
    estadoErroresOK.terminos = validarTerminos(estadoUsuario.terminos);

    console.log(estadoUsuario);

    mostrarErrores();
})


/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */
function validarEmail(email){
    let resultado = false;

    if( !email.includes('@') || !email.includes('.') ||  email.length < 5 ){
        resultado = true;
    }

/*     let expReg = '/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;';

    if(  expReg.test(  email )  ){
        resultado = true;
    }
 */

    return resultado;
}

function validarPassword(password){
    let resultado = false;

    if( password.length < 5 || password.includes(' ') ) {
        resultado = true;
    }

    return resultado;
}

function validarRol(rol){
    let resultado = false;

    if( rol === '' ){
        resultado = true;
    }


    return resultado;
}

function validarTerminos(verificacion){
    let resultado = false;

    if( !verificacion  ){
        resultado = true;
    }

    return resultado;
}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // LO IMPLEMENTAMOS LA PROXIMA,PROXIMA...
    if ( !estadoErroresOK.email && !estadoErroresOK.password && !estadoErroresOK.rol && !estadoErroresOK.terminos) {
        alert("Pasó todas las validaciones!");
        let cadena = JSON.stringify(estadoUsuario);
        localStorage.setItem('usuario', cadena );
        
    }else {
        console.error('No paso la validación')

    }

});




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página de Usuario
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.

function navegarPaginaExito() {
    //   desarrollar la funcion aqui

}
