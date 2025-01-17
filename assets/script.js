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
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('.text');
const dots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow.arrow_left');
const arrowRight = document.querySelector('.arrow.arrow_right');

let index = 0;

// Initialisation
function initSlide() {
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[index].classList.add('dot_selected');
}
initSlide();

// Changement de slide
function changeSlide(direction) {
    index = (index + direction + slides.length) % slides.length; // Gestion du débordement
    initSlide();
}

// Événements sur les flèches
arrowLeft.addEventListener('click', () => changeSlide(-1));
arrowRight.addEventListener('click', () => changeSlide(1));



//Événements sur les dots(en-plus)
dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        if (index !== dotIndex) { // Vérifie si le dot cliqué est différent du slide actuel
            index = dotIndex; // Change l'index pour celui correspondant au dot cliqué
            initSlide(); // Met à jour le slide
        }
    });
});
