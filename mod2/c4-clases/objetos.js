//let amigos = ["coco", "juanse", "delfi"];
//let amigosJSON = JSON.stringify(amigos)
//console.log(amigosJSON);
//console.log(amigos);


//objetos literales
//let curso = {
//    nombre: "Javascript",
//    alumnos: 32,
//    docentes: ["Nacho", "Javier"]
//}
//console.log(curso.nombre)
let curso = {
    nombre: "Javascript",
    alumnos: 32,
    docentes: ["Nacho", "Javier"],
    horario: "de 18 a 21hs.",
    notificaciones: function(){
        return "El horario de la cursada es " + this.horario
    }
}
//console.log(curso.notificaciones())

//Funciones constructoras --> Tener una funcion que cree objetos (buena practica que la funcion empiece con mayuscula)

function Curso(cantidadDeAlumnos,docentes,horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}
//Instanciar un objeto
let cursoDeProgramacion = new Curso(50,["javier", "gerardo"], "de 19 a 22hs.")
let cursoDeMarketing = new Curso(89,["delfina", "juanse"], "de 20 a 22hs.")

console.log(cursoDeMarketing)
