console.log(campers);
//6. selectors
const nombreCamper =document.querySelector('#nombre');
const edadCamper = document.querySelector('#edad');
const minCamper=document.querySelector('#minimo');
const maxCamper=document.querySelector('#maximo');
const lvlCampus = document.querySelector('#nivelCampus');
const lvlIngles = document.querySelector('#nivelIngles');
const especialidadC=document.querySelector('#especialidad');
const expertTecnologia= document.querySelector('#expertoTecnologia')
/* 1. llenar dinamicamente valores select de campers y sus nombres*/
campers.forEach((optionCamper)=>{
    const opcion = document.createElement('option');
    opcion.value = optionCamper.nombre;
    opcion.textContent =optionCamper.nombre;
    document.querySelector('#nombre').appendChild(opcion)
})
/* 2. llenas el select dinamicamente con la edad de los campers */
/* campers.forEach((optionCamper)=>{
    const opcion=document.createElement('option');
    opcion.value=optionCamper.edad;
    opcion.textContent=optionCamper.edad;
    document.querySelector('#edad').appendChild(opcion)
}) */
for (let camper = 15; camper <= 44 ; camper++) {
    const opcion=document.createElement('option');
    opcion.value=camper;
    opcion.textContent=camper;
    document.querySelector('#edad').appendChild(opcion)
}
/* 5. objeto con parametros para la busqueda */
const parametros ={
    nombre:'',
    edad: '',
    minPromedio:'',
    maxPromedio:'',
    nivelCampus:'',
    nivelIngles:'',
    especialidad:'',
    expertoTecnologia:'',
}

/* 7. Event listeners Filters*/
nombreCamper.addEventListener('input', e=>{
    parametros.nombre=e.target.value
    /* 8. llamado funcion de alto nivel */
    filtrarCamper()
})
edadCamper.addEventListener('input', e=>{
    parametros.edad=e.target.value
    filtrarCamper()
})
minCamper.addEventListener('input', e=>{
    parametros.minPromedio=e.target.value 
    filtrarCamper()
})
maxCamper.addEventListener('input', e=>{
    parametros.maxPromedio=e.target.value
    filtrarCamper()
})
lvlCampus.addEventListener('input', e=>{
    parametros.nivelCampus=e.target.value 
    filtrarCamper()
})
lvlIngles.addEventListener('input', e=>{
    parametros.nivelIngles=e.target.value
    filtrarCamper()
})
especialidadC.addEventListener('input', e=>{
    parametros.especialidad=e.target.value
    filtrarCamper()
})
expertTecnologia.addEventListener('input', e=>{
    parametros.expertoTecnologia=e.target.value
    filtrarCamper()
})

/* event listeners */

document.addEventListener('DOMContentLoaded', ()=>{
    showCampers(campers);
    console.log(parametros);
})

/* Funcion para inyectar dinamicamente html */

function showCampers(campers) {
    /* selecciono el elemento html parent que contendra mis cards */
    const contenedorTarjetas = document.querySelector('#tarjetas')
    //html para cada camper (card)
    //limpiar
    limpiar()
    campers.forEach((camper)=>{
        //destructuring
        let {imagen, nombre, detalle}=camper //destruturacion del profesor
        camperNombre=camper.nombre //mi destructuracion
        camperDetalle=camper.detalle
        const camperHTML = document.createElement('p')
        camperHTML.innerHTML=`
        <div class="tarjetas" id="tarjetas">
          <div class="card" style="width: 18rem;">
            <img src="/img/${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${camperNombre}</h5>
              <p class="card-text">${camperDetalle}</p>
            </div>
            <ul class="list-group list-group-flush">
              <a href="#" class="btn btn-danger">details</a>
            </ul>
          </div>
        </div>`;
        contenedorTarjetas.appendChild(camperHTML)
    })
}
/* 8.1 declaracion de funcion de alto nivel */
/* 8.2 */
function filtrarCamper() {
    const resultado = campers
    .filter(filtrarNombre)
    .filter(filtrarEdad)
    .filter(filtrarMinPromedio)
    .filter(filtrarMaxPromedio)
    .filter(filtrarNivelCampus)
    .filter(filtrarNivelIngles)
    .filter(filtrarEspecialidad)
    .filter(filtrarExpertTecnologia)
    console.log(resultado);
    showCampers(resultado)
}
function filtrarNombre(camper) {
    if (parametros.nombre) {
        return camper.nombre === parametros.nombre
    }
    return camper
}
function filtrarEdad(camper) {
    if (parametros.edad) {
        return camper.edad === parametros.edad
    }
    return camper
}
function filtrarMinPromedio(camper) {
    if (parametros.minPromedio) {
        return camper.promedio >= parametros.minPromedio
    }
    return camper
}
function filtrarMaxPromedio(camper) {
    if (parametros.maxPromedio) {
        return camper.promedio<= parametros.maxPromedio
    }
    return camper
}
function filtrarNivelCampus(camper) {
    if (parametros.nivelCampus) {
        return camper.nivelCampus===parametros.nivelCampus
    }
    return camper
}
function filtrarNivelIngles(camper) {
    if (parametros.nivelIngles) {
        return camper.nivelIngles===parametros.nivelIngles
    }
    return camper
}
function filtrarEspecialidad(camper) {
    if (parametros.especialidad) {
        return camper.especialidad===parametros.especialidad
    }
    return camper
}
function filtrarExpertTecnologia(camper) {
    if (parametros.expertoTecnologia) {
        return camper.expertoTecnologia===parametros.expertoTecnologia
    }
    return camper
}
function limpiar() {
    let m= document.querySelectorAll('p')
    for (let a = 0; a < m.length; a++) {
        m[a].remove()
    }
}

