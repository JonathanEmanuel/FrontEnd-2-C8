/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego(){
    let nombre;
    // Saludo y solicito el nombre
    alert('Bienvendio al Juego de Piedra Papel o Tijera');
    do {
        nombre = prompt('Ingrese su nombre');
    } while( nombre == null || nombre.length < 3 )
    
    nombre = nombre.toUpperCase();
    alert(' Hola ' + nombre + '!'  );

    return nombre;
}

// Creamos una variable Global con el nombre del jugador
//const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                       CONSIGNA DE LA MESA DE TRABAJO                       */
/* -------------------------------------------------------------------------- */

// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.