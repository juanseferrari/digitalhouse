window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo = document.querySelector("figure")
    let botonAgregar = document.querySelector(".botonAgregar")

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    logo.addEventListener("mouseover", function(){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })

    botonAgregar.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#6fd841"
    })
    botonAgregar.addEventListener("mouseleave", function(){
        this.style.backgroundColor = "green"
    })






}