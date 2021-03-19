let btnNocturno = document.getElementById('btnNocturno')
let circulo = document.getElementById('nocturnoCirculo')

const footer = document.getElementById('footer')


btnNocturno.addEventListener('click',function(){
    circulo.classList.toggle('traslacion')
    /*Modo nocturno*/
    document.body.classList.toggle('dark')
})

let head = document.getElementById('head')
let altura = head.offsetTop;

window.addEventListener('scroll',function(){
    if(window.pageYOffset > altura) {
        head.classList.add('fixedmenu')
    }else{
        head.classList.remove('fixedmenu')
    }
})

let navegacion = document.getElementById('navegacion')
let btnMenu = document.getElementById('btnMenu')

btnMenu.addEventListener('click',function(){
    navegacion.classList.toggle('mostrarMenu')
})

let slides = document.querySelectorAll('.slides')
let btnDerecha = document.querySelector('.fa-chevron-right')
let btnIzquierda = document.querySelector('.fa-chevron-left')
const cabecera = document.querySelector('header')



btnDerecha.addEventListener('click',function(){
    next();
})
btnIzquierda.addEventListener('click',function(){
    back();
})

i=0
function next(){
    slides[i].style.display="none";
    i++
    if(i>slides.length-1){
        i=0
    }
    slides[i].style.display="block";
}

function back(){
    slides[i].style.display="none";
    i--
    if(i<0){
        i=3
    }
    slides[i].style.display="block";
}
/*Intervalo de Diapositivas*/