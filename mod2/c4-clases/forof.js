
let listaDealumnos = [
    {
        nombre: "Pablo",
        promedio: 8,
        aprobado: false

    }
]

//FOR OF --> Es una forma de recorrer arrays un poco diferente
for (const alumno of listaDealumnos){
    console.log(alumno)
    if(alumno.promedio >= 7){
        alumno.aprobado = true
    } else {
        alumno.aprobado = false
    }
    console.log(alumno)

}

//FOR IN --> Otra forma de manejar fors
for (const key in listaDealumnos){
    console.log(key + ": " + listaDealumnos[key].nombre)
}