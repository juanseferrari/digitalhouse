//Spread operator con arrays

let peliculasDeAccion = ['Iron Man', 'Hulk', 'Avatar']
let otrasPeliculas = ['Titanic', 'La Momia']

let peliculas = [...peliculasDeAccion,...otrasPeliculas];
//console.log(peliculas)

//Spread operators en objetos.
let generoComedias = {
    nombreGenero: 'Comedia',
    popularidad: 4
}
let miPobreAngelito = {
    nombre: 'Mi Pobre angelito',
    duracion: 120,
    ...generoComedias //--> Sin los ... seria un objeto dentro de otro. Los ... lo suman al objeto original.

}
let quePasoAyer = {
    nombre: 'Que paso ayer?',
    duracion: 120,
    ...generoComedias
}
//console.log(miPobreAngelito)
//console.log(quePasoAyer)

//Spread operator en funciones
function peliculasVistas(...peliculas){
    for(let i = 0;i < peliculas.length; i++){
        console.log('Ya vi las peliculas: '+ peliculas[i])
    }
}
peliculasVistas('Iron Man', 'End Game', 'Los juegos del hambre')

//Parámetro Rest
function miFuncion(param1,param2, ...otros){
    console.log(otros)
}
miFuncion(1,2,3,4,5,6) //--> Esto devuelve [3,4,5,6]