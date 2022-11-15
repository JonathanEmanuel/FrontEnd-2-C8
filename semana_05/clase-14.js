/* 
const objeto = {
    nombre: 'Juan',
    apellido: 'Ramirez',
    edad: 28,
    lenguajes: [
        'PHP', 'JavaScript', 'Python'
    ]
}

let cadena = JSON.stringify( objeto);
console.log(cadena);

let objetoJSON = JSON.parse(  cadena  );

console.log( objetoJSON);


localStorage.setItem('persona', cadena);

 */

/* -------------------------------------------------------------------------- */
/*           [6] FUNCION: Escuchamos el evento de carga de la página          */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function () {
    // 👇 Todo lo que desarrollamos dentro, se ejecuta una vez que se carga la página
    const usuario = recuperarDataStorage();
    if(  usuario ){
        renderizarElementos(usuario);

    } else {
        location.href = 'index.html';
    }
})

/* -------------------------------------------------------------------------- */
/*                 [7] FUNCION: Recuperar la info del storage                 */
/* -------------------------------------------------------------------------- */
function recuperarDataStorage() {
    // Lee la info del Storage y la retorna
    const usuario = JSON.parse( localStorage.getItem('usuario') );
    return usuario;
}


/* -------------------------------------------------------------------------- */
/*                [8] FUNCION: Renderizamos la info en pantalla               */
/* -------------------------------------------------------------------------- */
function renderizarElementos(objeto) {
    const email = document.querySelector('#email');
    const perfil = document.querySelector('#perfil');

    email.textContent = objeto.email;
    perfil.textContent = objeto.rol;

}


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                     [9] FUNCION: Boton de cerrar sesion                    */
/* -------------------------------------------------------------------------- */
// Ahora vamos a crear elementos en el DOM dinamicamente y le asignaremos a esos elementos la escucha de eventos.
// ☝ La funcion debe ser ejecutada al final del evento Load.
// La idea es crear un boton para cerrar sesión. Entonce necesitamos cumplir los siguientes puntos:
// 1- Crear un elemento <button>
// 2- Que ese botón tenga el texto "Cerrar sesión"
// 3- El boton tiene que tener ciertos estilos:
//     - padding arriba y abajo de 5px y a los costados 20px
//     - color de fondo rojo con transparencia: rgba(255,0,0,0.2)
//     - color de letra rojo
//     - margenes a todos los lados de 20px
//     - ningún borde
//     - cursor de tipo pointer
// 4- Tenemos que agregar el botón en pantalla, adentro del div con la clase 'user', al final del mismo
// 5- El botón debe reaccionar cuando se le hace click
// 6- Mediante el click debe aparecer un cuadro de confirmación que pregunte: "¿Seguro desea cerrar sesión?"
// 7- Si el usuario acepta debe borrar todo el storage y redirigirlo a la pantalla de Login.

function botonCerrarSesion() {
    //    👇 desarrollar la función

}
