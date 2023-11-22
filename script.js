let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("comunicacion");
        habilidades[1].classList.add("trabajo");
        habilidades[2].classList.add("creatividad");
        habilidades[3].classList.add("dedicacion");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("htmlcss"); 
        habilidades[6].classList.add("Photoshop");
    }
}
window.onscroll = function(){
    efectoHabilidades();
} 
