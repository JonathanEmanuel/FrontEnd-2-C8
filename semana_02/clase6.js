/* ------------- Antes escribo las referencial del DOM ------------- */
const body = document.querySelector('body');
const titulo = document.querySelector('#titulo');
const contenedorNoticias = document.querySelector('.noticias');
const clima = document.querySelector('.clima');
const dolar = document.querySelector('.dolar');

console.log(titulo,clima, dolar);

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

let imagen = document.createElement('img');

imagen.setAttribute('src', 'js.png');
//imagen.setAttribute('class', 'logo');
imagen.classList.add('logo');

let subtitulo = document.createElement('h2');
subtitulo.innerText = 'Esto es un subtitulo';


console.log(imagen);

contenedorNoticias.appendChild(imagen);
contenedorNoticias.appendChild(subtitulo);
