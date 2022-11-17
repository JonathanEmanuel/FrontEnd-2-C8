// Vamos implementar esta funcion en el script de Clase 13 al principio.
// Antes de la carga de la window hacemos un chequeo del Storage.
/* -------------------------------------------------------------------------- */
/*                [10] FUNCION: chequeamos si existe un usuario               */
/* -------------------------------------------------------------------------- */

function chequearUsuarioValido() {
    // 👇 Obtengo los datos del storage
    //const usuario = document
    const usuario =  JSON.parse(  localStorage.getItem('usuario') );
    console.log(usuario);


   
    

    // Si existe el usuario voy a la página usuario.html
    if( usuario ){
        console.log('ok')
         // Destructuración de objetos
        const { email, rol, terminos } = usuario;
        console.log(`El email es ${email} \n El Rol es ${rol} \n Acepto los terminos ${terminos}`);
        
        location.href = 'usuario.html';

    } else {
        console.log('Loguearse')

    }
}
