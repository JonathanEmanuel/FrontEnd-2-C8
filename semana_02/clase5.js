/* ------------- Antes escribo las referencial del DOM ------------- */
const body = document.querySelector('body');
const titulo = document.querySelector('#titulo');
const contenedorNoticias = document.querySelector('.noticias');
const clima = document.querySelector('.clima');
const dolar = document.querySelector('.dolar');

console.log(body,titulo,clima, dolar);

const noticias = [
    {
        titulo: 'La emoción de Lisandro Martínez',
        fotoUrl: 'img/futbol.webp',
        descripcion: 'La increíble ovación de los hinchas de Manchester United al defensor argentino: "Quise llorar".'
    },
    {
        titulo: 'La renuncia de Liz Truss',
        fotoUrl: 'img/boris.webp',
        descripcion: 'Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.'
    },
    {
        titulo: 'Los motivos',
        fotoUrl: 'img/escuela.webp',
        descripcion: 'Una escuela argentina fue elegida entre las diez mejores del mundo.'
    }
];

/* ---------------------------- Edito los textos ---------------------------- */
// Diferencias entre innetHTML vs innerText
titulo.innerHTML = ' <i> FrontEnd II </i> Clase 05';

//titulo.innerText = ' <i> FrontEnd II </i> Clase 05';

function actualizarDolar(){
    let dolarVenta = 130;
    let dolarCompra = 120;
    dolar.innerHTML = `💸 Dólar hoy: $ ${dolarVenta}/$${dolarCompra}`;
}


function actualizarTemperatura(temperatura){
    clima.innerHTML = `🌤 ${temperatura} ° Capital Federal`;
}

function actualizarNoticias(){
    contenedorNoticias.innerHTML = '';

    noticias.forEach(noticia => {
        contenedorNoticias.innerHTML += 
                `<article>
                    <h2>${ noticia.titulo}</h2>
                    <img src="${noticia.fotoUrl}" alt="">
                    <p>${noticia.descripcion}</p>
                </article>`;
    });

    /* 
    for (let i = 0; i < noticias.length; i++) {
        console.log( noticias[i]);
        contenedorNoticias.innerHTML +=
                `<article>
                    <h2>${ noticias[i].titulo}</h2>
                    <img src="${noticias[i].fotoUrl}" alt="">
                    <p>${noticias[i].descripcion}</p>
                </article>`;
    } */

}

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo oscuro, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"
function elegirTema() {
    
}


actualizarTemperatura(27)

body.classList.add('dark');

actualizarNoticias();
