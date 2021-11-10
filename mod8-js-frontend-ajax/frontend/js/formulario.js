window.onload = async () => {
    let id = 5
    let result = await fetch("http://localhost:3031/api/movies/"+id)
    const peliculas = await result.json()
    let data = peliculas.data;
    console.log(data)


    let title = document.querySelector("#title")
    let rating = document.querySelector("#rating")
    let awards = document.querySelector("#awards")
    let release_date = document.querySelector("#release_date")
    let length = document.querySelector("#length")

    title.value = data["title"]
    rating.value = data["rating"]
    awards.value = data["awards"]
    release_date.value = data["release_date"]
    length.value = data["length"]

    //Botones
    let botonEditar = document.querySelector("#botonEditar")
    let botonAgregar = document.querySelector("#botonAgregar")
    let botonBorrar = document.querySelector("#botonBorrar")

 

    async function editarDatos(){
        let putSettings = {
            "method": "PUT",
            "data": {
                "title": title.value
            }
        }
        console.log(putSettings.data)

        let putResult = await fetch("http://localhost:3031/api/movies/update/" + id,putSettings)
        console.log(putResult)
        let EditResult = await putResult.json()
        console.log(EditResult)
        return EditResult
    }
    

    botonEditar.addEventListener("click", async function(){
        console.log("click editar")
        let resultado = await editarDatos()
        console.log(resultado)
    })


}