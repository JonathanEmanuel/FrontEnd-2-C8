 /* -------------------------------------------------------------------------- */
 /*                                  FUNCION 2                                 */
 /* -------------------------------------------------------------------------- */

 // Solicitar la opcion para jugar al jugador
function pedirJugada(){
    let eleccion;

    do {
        eleccion =  parseInt( prompt('Ingrese: \n 1.Piedra \n 2.Papel \n 3.Tijera') );

    } while(  isNaN(eleccion) || eleccion < 1 || eleccion > 3  );

    console.log('Juego con ' + eleccion );
    // Finalmente retornamos la eleccion
    return eleccion
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */

// Jugada de la maquina
function jugadaRandom(){
    //let numero2 =  Math.round(  Math.random() * (3 - 1) + 1 );
    let numero = parseInt( Math.random() * 3 +1 );
    console.log('La maquina juega con ' + numero );

    return numero;
}


/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */

// Devolver el resultado de la partida
function compararJugadas(){
    let eleccionJugador = pedirJugada();
    let eleccionMaquina = jugadaRandom();
    const resultados_posibles = ['¡Ganastes!', 'Empataron', 'Lo lamento, perdistes'];
    let resultado;
    
    // Si ha empate
    if(  eleccionJugador ==  eleccionMaquina  ){
        resultado = resultados_posibles[1];
    
        // Posibles caso en donde el jugador pierde
    } else if(      ( eleccionJugador == 1 && eleccionMaquina == 2 ) 
                || ( eleccionJugador == 2 && eleccionMaquina == 3 ) 
                || (eleccionJugador == 3  && eleccionMaquina == 1) ) {
        resultado = resultados_posibles[2];

    } else { // Caso ganador
        resultado = resultados_posibles[0];
    }

    return resultado;
}

//const resultadoPartida = compararJugadas();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.