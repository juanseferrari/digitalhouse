    const mainElement = document.querySelector("main")
    const subtitleElement = document.querySelector(".subtitulo")
    const moviesLinkElement = document.querySelector("a")
    //Esto devuelve todos los elementos de p
    const pElements = document.querySelectorAll("p")
    console.log(subtitleElement)

    let userName = prompt("Ingrese su nombre");
    if(!userName){
        userName = "Carlitos";
    }
    console.log(userName)

    subtitleElement.innerHTML += userName
    //Todos los estilos de CSS llevados a javascript hay que sacarles el "-" y ponerlos en camelcase. Ejemplo: text-transform => textTransform
    subtitleElement.style.textTransform = "uppercase"
    moviesLinkElement.style.color = "#E51B3E";

    if (confirm("Desea colocar un fondo de pantalla?")){
        const body = document.querySelector("body")
        body.classList.add("fondo")
    }

    pElements.forEach((p,i) => {
        if (i % 2 == 0){
            p.classList.add("destacadoPar")
        } else {
            p.classList.add("destacadoImpar")

        }
    })
    mainElement.style.display  = "initial"


