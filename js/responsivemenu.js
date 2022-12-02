var menu_responsivo = window.document.querySelector('.menu-responsivo')

var principal = window.document.querySelector('.principal')

function abrir_menu(){
    if (menu_responsivo.style.display == "none"){
        menu_responsivo.style.display = "flex"
    }else{
        menu_responsivo.style.display = "none"
    }
}

function fechar_menu(){
    menu_responsivo.style.display = "none"
}

document.addEventListener('mouseup', function(e){
    if (!menu_responsivo.contains(e.target)){
        menu_responsivo.style.display="none"
    }
})

function menu(){
    if (screen.width <= 1100){
        menu_responsivo.style.display = "none"
    }else if(screen.width  > 1100){
        menu_responsivo.style.display = "none"
    }
}