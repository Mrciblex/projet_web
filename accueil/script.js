/* ---------------------------------------- NAV RESPONSIVITY ---------------------------------------- */
const nav_menu_button = document.getElementById("nav-menu-button");
const left_nav = document.querySelector(".left-nav");
const main_nav = document.querySelector(".main-nav");
const nav = document.querySelector(".nav");
const exit_nav = document.getElementById("exit_nav");
const open_nav = document.getElementById("open_nav");

/* responsive menu bouton pour menu déroulant */
nav_menu_button.addEventListener("click", () => {
    left_nav.classList.toggle("show-nav");
    nav.classList.toggle("show-animation-nav");
    main_nav.classList.toggle("show-animation-nav");
    if (open_nav.style.display != "none"){
        exit_nav.style.display = "flex";
        open_nav.style.display = "none";
    }else{
        exit_nav.style.display = "none";
        open_nav.style.display = "flex";
    }
});

/* evite le bug de quand on re-agrandi la page avec menu déroulant ouvert */
window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth <= 1074){
        left_nav.classList.remove("show-nav");
        nav.classList.remove("show-animation-nav");
        main_nav.classList.remove("show-animation-nav");
        exit_nav.style.display = "none";
        open_nav.style.display = "flex";
    }
});

/* -------------------------------------------------------------------------------------------------- */



/* -------------------------------------- SLIDER TOP AVEC DOTS -------------------------------------- */
const dots = document.querySelectorAll(".dots");
const firstImage = document.querySelector(".img-slider-top");
const slider_top = document.getElementById("slider-top");
let selectedDot = dots[0];

/* gestion des 3 choix (points) pour switch slider top */
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlide); // Clear interval pour pas auto slide directement après la selection de l'utilisateur
        autoSlide = slide(); // Reset de l'auto slide grâce à la fonction slide()

        let selectedSliderId = dot.id.split("-"); // ex : dot-1
        let selectedSlider = selectedSliderId[1]; // ex : 1
        let widthToScroll = firstImage.clientWidth;
        //console.log(widthToScroll);
        //console.log(actualWidthScroll);

        slider_top.scrollLeft = widthToScroll * selectedSlider;
        
        selectedDot.classList.remove("selected-dots");
        dot.classList.add("selected-dots");
        selectedDot = dot;
    })
});

// Auto slide toute les x secondes
const interval_sec = 4; // Toutes les 4 secoondes
function slide () {
    let autoSlide = setInterval(() => {
        let widthToScroll = firstImage.clientWidth;
        selectedDot.classList.remove("selected-dots");
        if (parseInt(selectedDot.id.split("-")[1]) < 2){
            let nextDot = parseInt(selectedDot.id.split("-")[1]) + 1;
            slider_top.scrollLeft = widthToScroll * nextDot;
            selectedDot = dots[nextDot];
            //console.log('go next ' + nextDot);
        }else{
            slider_top.scrollLeft = widthToScroll * 0;
            selectedDot = dots[0];
            //console.log('go 0');
        }
        selectedDot.classList.add("selected-dots");
    }, interval_sec * 1000);

    return autoSlide;
}

let autoSlide = slide();
/* -------------------------------------------------------------------------------------------------- */



/* ----------------------------------------- SLIDER PANE MID ---------------------------------------- */
const slider_mid_container = document.getElementById("slider-mid-container");
const panes = document.querySelectorAll(".illustration-mid-pane"); // Les "affiches" slidable
const back_mid_slider = document.getElementById("back-mid-slider");
const next_mid_slider = document.getElementById("next-mid-slider");
const progressBar_mid_slider = document.getElementById("progress_bar_slider"); // Barre qui charge

const nb_panes = panes.length;
const widthToScroll_mid = panes[0].clientWidth;
let index_slider_mid = 1;

/* update le niveau de chargement de la bar du slider mid */
function update_bar(index_slider_mid = 1){
    console.log(index_slider_mid);
    let progress = ((index_slider_mid * 100) / nb_panes);
    if (index_slider_mid == 1){
        progress = 5;
    }
    progressBar_mid_slider.style.background = `linear-gradient(to right, white ${progress}% , #9c9c9c 0%)`;
}

/* slider mid flèche arrière (back) */
back_mid_slider.addEventListener("click", () => {
    if (index_slider_mid == 1){
        index_slider_mid = nb_panes;
    }else{
        index_slider_mid--;
    }
    update_bar(index_slider_mid);
    
    // J'ai un bug ici quand j'ajoute l'enfant, ça ne fonctionne pas avec 1 seule. Je n'ai pas trouvé pourquoi
    // Mais je pense que ma manière de faire est mauvaise en globalité j'aurais dû m'y prendre différement en html/css/js.
    slider_mid_container.insertBefore(slider_mid_container.lastChild, slider_mid_container.firstChild);
    slider_mid_container.insertBefore(slider_mid_container.lastChild, slider_mid_container.firstChild);
});

/* slider mid flèche avant (next/forward) */
next_mid_slider.addEventListener("click", () => {
    if (index_slider_mid == nb_panes){
        index_slider_mid = 1;
    }else{
        index_slider_mid++;
    }
    update_bar(index_slider_mid);
    
    // J'ai un bug ici quand j'ajoute l'enfant, ça ne fonctionne pas avec 1 seule. Je n'ai pas trouvé pourquoi
    // Mais je pense que ma manière de faire est mauvaise en globalité j'aurais dû m'y prendre différement en html/css/js.
    slider_mid_container.appendChild(slider_mid_container.firstChild);
    slider_mid_container.appendChild(slider_mid_container.firstChild);
});