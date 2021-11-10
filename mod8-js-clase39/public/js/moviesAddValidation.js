
const title = document.querySelector("#title")
const rating = document.querySelector("#rating")
const awards = document.querySelector("#awards")
const release_date = document.querySelector("#release_date")
const movieLength = document.querySelector("#length")
const genre_id = document.querySelector("#genre_id")

// con el .focus() podemos hacer que ya se seleccione ese elemento cuando carga la pagina
title.focus()

const requiredInputs = [
    title,
    rating,
    awards,
    release_date,
    movieLength,
    genre_id,
];

const form = document.querySelector("#formulario form")
form.addEventListener("submit", (event) => {
    if (formIsInvalid()){
        console.log("formulario es invalido")
        event.preventDefault();
    } 
})



function formIsInvalid(){
    let error = false

    for (const input of requiredInputs) {
        if(isEmpty(input)){
            input.classList.add("is-invalid")
            error = true
        } else {
            input.classList.remove("is-invalid")
            input.classList.add("is-valid")
        }
    }
    return error
}

function isEmpty(input){
    if (input){
        return input.value.trim() == "";
    }
    return false
}