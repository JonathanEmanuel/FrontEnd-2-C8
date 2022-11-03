const cantAlbums = document.querySelector('#cant-albums');
const cantFavoritos = document.querySelector('#cant-favoritos');
/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: Marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - Buscar el album por id en el array 
// - Cambiar el estado del like
// - Volver a renderizar
// Agregar Lisent a los botones
function marcarFavorito() {
    const botonesLikes = document.querySelectorAll('.fa-heart');

    //console.log(botonesLikes);
    // No se puede agregar un EventListener sobre una lista. Para eso lo recorro
    // botonesLikes.addEventListener
    
    botonesLikes.forEach(boton => {
        boton.addEventListener('click', function(){
            // Obtendo el Id
            console.log(this.id);
            modificarLike(this);
        })
    });


}
marcarFavorito()
// Recorre el array de albumesFamosos y busco el id. Modifica el like
function modificarLike(obj){

    albumesFamosos.forEach(album => {
        if( album.id == obj.id){
            album.like = !album.like;
            obj.classList.toggle('favorito');
        }

    });

    //renderizarAlbumes(albumesFamosos);
    // Luego agrego los EventListener
    // marcarFavorito();
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
    // desarrollar la función 👇
    let nombre = prompt('Ingrese el nombre del album');
    let pos = albumesFamosos.findIndex( item => item.nombre == nombre );
    console.log(pos);
    if( pos != -1){
        albumesFamosos.splice(pos, 1);
    }
}
//eliminarAlbum();

document.addEventListener('keydown_', function(evento){
    //console.log(evento);
    let tecla = evento.key;
    if( tecla.toLowerCase() == 'f'){
        console.log(tecla);
        eliminarAlbum();
    }
})
