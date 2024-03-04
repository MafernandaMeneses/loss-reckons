window.addEventListener('scroll', function(){
    let scroll = document.getElementById('scroll');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/3;

    if(posicionObj1 < tamañoDePantalla){
        scroll.stylePrueba.animation = 'mover 1s ease-out'
    }
})