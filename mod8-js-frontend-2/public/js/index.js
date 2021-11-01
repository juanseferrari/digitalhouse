window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    let logo = document.querySelector('figure')
    let menu = document.getElementById('menu')


    

    //promt: aparece un input y agarras la info
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
    
        
    
    subtitulo.style.textTransform = 'uppercase';

    //el confirm aparece un boton de aceptar en el navegador
    /** 
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    */

    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    container.style.display = 'block';

    //Click en logo, que aparezca el menu
    logo.addEventListener("click", function() {
        menu.classList.toggle("mostrar")
    })
    menu.addEventListener("mouseleave", function() {
        this.classList.toggle("mostrar")
    })
}