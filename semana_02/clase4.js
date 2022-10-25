console.log(document);


// Quiero seleccionar el titulo
const titulo = document.querySelector('h1');
console.log(titulo);

// Seleccion los h2
const subtitulos = document.querySelectorAll('h2');

console.log(subtitulos);

for (let i = 0; i < subtitulos.length; i++) {
    console.log( i, subtitulos[i] );
}

console.log('Recorrido con ForEach')
subtitulos.forEach( (element, index) => {
    console.log( element, index);
});

// Selecciono el p con la clase dolar
const dolar =  document.querySelector('.dolar');
console.log('El precio del dolar es ', dolar);

const h1_q = document.querySelector('#titulo');
const h1_g = document.getElementById('titulo');

console.log(h1_q, h1_g);