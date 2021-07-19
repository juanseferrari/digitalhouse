// Leer el archivo tareas.json
// importar el archivo json <--- string
// >>importar modulo para interactuar con el sistema de archivos ("fs")
const fs = require("fs");
// >>leer el archivo usando fs, en base al nombre del archivo
const textoJSON = fs.readFileSync("./tareas.json", "utf-8");

// descomprimir/traducir el archivo json <--- array con objetos
// guardar mi array de objetos en una variable "tareas"
const tareas = JSON.parse(textoJSON);

// dependiendo de la acción que nos llega como tercer parámetro
const accion = process.argv[2];

// tomamos diferentes medidas
switch (accion) {
  //Si la accion es "listar", listo todas las tareas
  case "listar": {
    listar();
    break;
  }
  case "filtrar": {
    const estado = process.argv[3];
    filtrarPorEstado(estado);
    break;
  }
  case "crear": {
    const nombre = process.argv[3];
    crearTarea(nombre);
    listar()
    break;
  }
  //Si no hay un tercer parametro, doy el mensaje "Debés usar un parámetro de acción"
  case undefined: {
    console.log("Debés usar un parámetro de acción");
    break;
  }
  //Si la accion es cualquier otra cosa, doy el mensaje "No entiendo lo que querés que haga"
  default: {
    console.log("No entiendo que querés que haga");
  }
}

function listar() {
  // Imprimir todas las tareas en la terminal
  // Recorrer ese array en "tareas"
  // > Por cada una de las tareas en ese array
  tareas.forEach((tarea) =>{
  // >> asignar el elemento a una variable llamada "tarea"
  // >> Imprimir el titulo de la tarea
  //console.log(`(${i}) - ${tarea.titulo} [${tarea.estado}]`);
  console.log(tarea.titulo)
  })
}

function crearTarea(nombre){
  const nuevaTarea = {
    titulo: nombre,
    estado: "pendiente"
  }
  tareas.push(nuevaTarea);
  const tareasJSON = JSON.stringify(tareas,null,4);
  fs.writeFileSync("./tareas.json", tareasJSON)

}

//funcion para filtrar las tareas por estado
function filtrarPorEstado(estado){
  //console.log('Estamos en filtrado de '+ estado)
  let tareasPorEstado = tareas.filter(function(tarea){
      return tarea.estado == estado
  })
  console.log('Tareas con estado ' + estado + ':')
  tareasPorEstado.forEach(function(tarea){
    console.log(tarea.titulo)
  })
}

// COMO INVOCAR TODO ESTO EN LA TERMINAL:

// node app.js listar --> Trae todos los elementos de tareas.json
//node app.js crear "un nombre largo" --> Crea un nuevo elemento con ese nombre. 
//Importante las comillas porque sino toma cada palabra como un indice diferente.

