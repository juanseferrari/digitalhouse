//EJEMPLO 1 de callbacks

function doble(n){
    return n * 2;
}

function triple(n){
    return n*3
}

function aplicarCallback(n, func){
    return func(n)
}
console.log(aplicarCallback(10, triple));


//Ejemplo 2 callbacks

function suma(n1,n2){
    return n1 + n2
};

function resta(n1,n2){
    return n1 - n2
}
function multiplicacion(n1,n2){
    return n1 * n2
}
function division(n1,n2){
    return n1 / n2
}

function calculadora(n1,n2,operacion){
    return operacion(n1,n2)
};

console.log(calculadora(2,2,suma))

//EJEMPLO 3 de callbacks
function agregarHttp(url) {
    return "http://" + url
}

function procesar(array, funcion){
    for(let i = 0; i<array.length; i++){
        array[i] = funcion(array[i]);
    }
    return array

    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}

  let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas);