const dataAnima = document.querySelectorAll('[data-anima]')
const animacaoClass = 'animacao';

function animaScroll(){
    const topoPaginaNaJanela = window.scrollY+100;
    dataAnima.forEach(function(anima){
        if(topoPaginaNaJanela > anima.offsetTop){
            anima.classList.add(animacaoClass);
        }else{
            anima.classList.remove(animacaoClass);
        }
    });
}

if(dataAnima.length){
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}