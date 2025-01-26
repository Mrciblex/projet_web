//Partie du js pour le slide de la dernier partie permet de stopper l'animation quand la souris passe dessus, je l'avais fait en js mais il y avait un probleme car avec un hover je ne pouvais pas 
//selectionner que les images pour la stopper mais son container, ce qui faisait que si je mettais la souris sur le container sans etre sur une image ca stoppé le slide.
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide img');
slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        sliderWrapper.style.animationPlayState = 'paused';   //pause
    });
    slide.addEventListener('mouseout', () => {
        sliderWrapper.style.animationPlayState = 'running'; //relance
    });
});
