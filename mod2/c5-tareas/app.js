
// Como obtener los archivos tareas.json interactuando con el sistema de archivos
const fs = require('fs');
let funcionesNode = require('./funcionesDeTareas.js', 'utf-8');
let listarTareas = funcionesNode.listar(process.argv[2]);
let listarEstados = funcionesNode.listarEstados(process.argv[3]);
//Opcion2 hacer un require ./tareas
//let tareasJSON = require('./tareas.json');
//console.log(tareasJSON)

const estados = ["pendiente", "en proceso", "terminado"];

const tarea = {
    titulo: "Practica que hacer",
    estado: "terminada"
}
//console.log(tarea.titulo)

const tareas = [
    {
        titulo: "Practica 1",
        estado: estados[0]
    },
    {
        titulo: "Practica 2",
        estado: "terminada"
    },
    {
        titulo: "Practica 3",
        estado: "en proceso"
    },
    tarea
]


