const formulario = document.querySelector('form');
const inputNombre = document.querySelector('#nombre');
const inputPass = document.querySelector('#pass');
const inputTel = document.querySelector('#tel');
const inputsHobbies = document.querySelectorAll('[name=hobbies]');
const inputsNacionalidades = document.querySelectorAll('[name=nacionalidad]');

//console.log(nombre, pass, tel, hobbies, nacionalidad )


/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
    /* ------------ leer los datos y retornar un objeto con los datos ----------- */
    const objeto = {
        nombre: '',
        password: '',
        tel: '',
        hobbies: [],
        nacionalidad: ''
    }

    /* --------------------------- Capturo los valores -------------------------- */
    
    objeto.nombre = inputNombre.value;
    objeto.password = inputPass.value;
    objeto.tel = inputTel.value

    inputsHobbies.forEach(input => {
        if( input.checked == true){
            objeto.hobbies.push( input.id )
        }
    });

    inputsNacionalidades.forEach(input => {
        if( input.checked ) {
            objeto.nacionalidad = input.id
        }
    });

    return objeto;
};

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let usuario = capturarDatosFormulario();
    //console.table(usuario);
    const listaErrores = validarInformacion(usuario);
    //console.log(listaErrores);

    renderizarErrores(listaErrores);
    mostrarMensajeExito(listaErrores);
})



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de obejetoInformacion
// Entonces dentro de esta funci??n vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores seg??n las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contrase??a tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contrase??a debe tener al menos 6 caracteres, entre letras y s??mbolos."
// 4- Si el telefono tiene menos de 10 n??meros, sumar el error: "No es un tel??fono v??lido."
// 5- Si la lista de hobbies tiene m??s de 4 items, sumar el error: "S??lo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(usuario) {
    let errores = [];
    // ???? desarrollar aqui la funcion
    usuario.nombre = usuario.nombre.trim();
    usuario.password = usuario.password.trim();
    usuario.tel = usuario.tel.trim();
    if(!/^[a-z????????????]{3,}$/gi.test(usuario.nombre)){
        errores.push("El nombre debe tener al menos 3 caracteres.");
    }
    if(!/^[\w@#$.-]{6,}$/gi.test(usuario.password)){
        errores.push("La contrase??a debe tener al menos 6 caracteres, entre letras y s??mbolos.");
    }
    if(!/^[\d]{10,15}$/gi.test(usuario.tel)){
        errores.push("No es un tel??fono v??lido.");
    }
    if(usuario.hobbies.length >4){
        errores.push("S??lo es posible seleccionar 4 hobbies.");
    }
    if(usuario.nacionalidad === ""){
        errores.push("Debe seleccionar una nacionalidad.");
    }

    return errores;
}