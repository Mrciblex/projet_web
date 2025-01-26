const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide img');

slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        sliderWrapper.style.animationPlayState = 'paused';
    });
    slide.addEventListener('mouseout', () => {
        sliderWrapper.style.animationPlayState = 'running';
    });
});
