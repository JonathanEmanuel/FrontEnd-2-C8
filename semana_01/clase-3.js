/*
    - pedirJugada()
    - jugadaRandom()
    - compararJugadas()
*/
let puntajes = {
    usuario: 0,
    compu: 0
}
const nombreJugador = iniciarJuego();


/* -------------------------------------------------------------------------- */
/*                               BUCLE PRINCIPAL                              */
/* -------------------------------------------------------------------------- */
while ( puntajes.usuario < 2 && puntajes.compu < 2 ) {  // mientras los dos sea menor a 2
    // Pido la jugada

    // Si Gano la persona Sumo
    const resultado = compararJugadas();

    if( resultado == '¡Ganastes!'  ){
        puntajes.usuario++;
    } else if( resultado == 'Lo lamento, perdistes' ){
        puntajes.compu++;
    }

    console.log( resultado);
    console.table(puntajes);

}

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, 
// perdió o empató durante el juego.
