// Array con listado de planes
const planesMensuales = [
    {
        tipo: "Básico",
        costo: 300,
        descripcion: "Podes escuchar música sin límites todo el mes."
    },
    {
        tipo: "Dúo",
        costo: 450,
        descripcion: "Música ilimitada para vos y alguien más."
    },
    {
        tipo: "Familiar",
        costo: 600,
        descripcion: "El mejor plan, hasta un total de 5 miembros."
    },
];

const footer = document.querySelector('footer');
let i = 0;
let intervalo;

window.addEventListener('load', function(){
    console.log('Ya se cargo la web');
    // El intervalo es en milisegundos
    intervalo = setInterval( intervalPromo , 1000  );
})



function intervalPromo(){

    i = (i<3) ? i : 0;

    console.log('Pos', i);
    console.log( planesMensuales[i] )
    
    footer.innerHTML = // html
        `<p>Plan: <strong>${planesMensuales[i].tipo }</strong> 
                $ ${planesMensuales[i].costo}</p>
            <p>${planesMensuales[i].descripcion}</p>`;
    
    i++;
}

// Detiene el intervalo
// clearInterval(intervalo)