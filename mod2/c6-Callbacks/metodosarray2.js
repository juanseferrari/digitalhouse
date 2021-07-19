
// ------------------------ .map() ---------------------
let notas = [10,5,7,3,1,5,1,2]

let notasHasta100 = notas.map(function(numero){
    return numero * 10 

})
//console.log(notasHasta100)

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function (hora){
    return hora - 1
})

//console.log(horariosAtrasados)
// ---------------------- .filter() ---------------------
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado == true
})
////console.log(aprobados)
let desaprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado == false
})
//console.log(desaprobados)

// --------------------- .reduce() -------------------------
let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(acum,num){
    return acum + num
})

//console.log(totalVueltas)

// --------------------- . forEach() -----------------------
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
let resultado = listaDeSuperMercado.forEach(function(n){
    //console.log(n)
})

//---------------------- Date -------------------------

let miFecha = new Date();
//console.log(miFecha)

// ------- .getDate() --> Devuelve el dia actual
console.log(miFecha.getDate())
// ------- .getMonth() --> Devuelve el mes actual
console.log(miFecha.getMonth())
// ------- .getDay() --> Devuelve un numero entre 0 (domingo) y 6 (sábado)
console.log(miFecha.getDay())
// ------- .getFullYear() --> Devuelve el año entero
console.log(miFecha.getFullYear())

// ----- Crear una nueva fecha --> Orden: Año, mes(arranca en 0), dia
let miCumple = new Date(1995,9,11)
console.log(miCumple)
