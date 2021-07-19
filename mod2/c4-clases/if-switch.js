//if ternario

let fruta = "Naranka";

let resultado = fruta == 'Manzana' ? "me gustan las manzanas" : "Ufa, queria manzana";
//console.log(resultado)

//switch

let semaforo = "Ninguna";

switch(semaforo){
    case 'Verde':
        console.log("Puedo cruzar");
        break;
    case 'Amarillo':
        console.log("Cruza rapido");
        break;
    case 'Rojo':
        console.log("No podes cruzar")
        break;
    default:
        console.log("No funciona el semáfoto");
        break;
    
}

function tengoClases(dia) {
    switch (dia) {
        case 'lunes':
        case 'miércoles':
        case 'viernes':
            console.log('tenés clases');
            break;
        default:
            console.log('no tenés clases');
    }
}