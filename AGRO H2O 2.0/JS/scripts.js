function mostrarContenido(seccion){
    var elementos=document.querySelectorAll('.Inicio, .Alianzas, .Noticias, .Servi, .Productos, .Contactanos-div, .FORO, .CONSEJO, .CHATS');

    elementos.forEach(function(elemento){
        elemento.style.display='none';   
    });
    
    var seccionMostrar;

    if(seccion.charAt(0)=='.'){
        seccionMostrar=document.querySelector(seccion);
    }else if(seccion.charAt(0)=='#'){
        seccionMostrar=document.querySelector(seccion);
    }else{
        seccionMostrar=document.querySelector('.'+seccion)||document.querySelector('#'+seccion);
    }
    
    if(seccionMostrar){
        seccionMostrar.style.display='block';
    }


}


// MENSAJE DE BOTONES NO FUNCIONALES
function MensajeNoFuncional(seccion){
    alert('Este es un boton no funcional')
}