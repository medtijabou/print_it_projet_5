const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments
const bannerImages = document.getElementsByClassName('banner-img');
const bannerTagline = document.getElementsByClassName('text');
const sliderDots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow.arrow_left');
const arrowRight = document.querySelector('.arrow.arrow_right');

let index = 0;

// Initialisation du premier slide
bannerImages[0].src = "./assets/images/slideshow/" + slides[index].image;
bannerTagline[0].innerHTML = slides[index].tagLine;
sliderDots[index].classList.add('dot_selected'); // Active le point correspondant

// Gestion des clics sur les flèches
arrowLeft.addEventListener('click', () => {
    ChangeSlide(-1);
});
arrowRight.addEventListener('click', () => {
    ChangeSlide(1);
});

// Fonction pour changer de slide
function ChangeSlide(sens) {
    // Mise à jour de l'index
    index += sens;

    if (index > slides.length - 1) index = 0;
    if (index < 0) index = slides.length - 1;

    // Mise à jour des images et des textes
    bannerImages[0].src = "./assets/images/slideshow/" + slides[index].image;
    bannerTagline[0].innerHTML = slides[index].tagLine;

    // Mise à jour des points (dots)
    sliderDots.forEach(dot => dot.classList.remove('dot_selected'));
    sliderDots[index].classList.add('dot_selected');
}
