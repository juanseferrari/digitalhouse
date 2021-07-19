const fs = require('fs');
var tareasJSON = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));


function listar(info){
    switch(info){
        case 'listar':
            for (let i = 0; i < tareasJSON.length; i++) {
                let tareaUnica = tareasJSON[i]
                console.log(tareaUnica.titulo)
            }
            break;
        case undefined:
            console.log("Atención: tienes que pasar una acción");
            break;
        default:
            console.log("No conozco esa accion");
            break;  
    }
}

function listarEstados(info){
    switch(info){
        case 'pendiente':
            for (let i = 0; i < tareasJSON.length; i++) {
                let tareaUnica = tareasJSON[i]
                if(tareaUnica.estado == "pendiente"){
                    console.log(tareaUnica.titulo)
                }
            }
            break;
        case 'terminada':
                for (let i = 0; i < tareasJSON.length; i++) {
                    let tareaUnica = tareasJSON[i]
                    if(tareaUnica.estado == "terminada"){
                        console.log(tareaUnica.titulo)
                    }
                }
            break;
        case 'en proceso':
                for (let i = 0; i < tareasJSON.length; i++) {
                    let tareaUnica = tareasJSON[i]
                    if(tareaUnica.estado == "en proceso"){
                        console.log(tareaUnica.titulo)
                    }
                }
            break;
        case undefined:
            console.log("Atención: tienes que pasar una acción");
            break;
        default:
            console.log("No conozco esa accion");
            break;  
    }
}



module.exports = {
    listar: listar,
    listarEstados: listarEstados
}