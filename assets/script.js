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


// // Sélection des éléments
// const bannerImage = document.querySelector('.banner-img');
// const bannerText = document.querySelector('.text');
// const dots = document.querySelectorAll('.dot');
// const arrowLeft = document.querySelector('.arrow.arrow_left');
// const arrowRight = document.querySelector('.arrow.arrow_right');

// let index = 0;

// // Initialisation
// function initSlide() {
//     bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
//     bannerText.innerHTML = slides[index].tagLine;
//     dots.forEach(dot => dot.classList.remove('dot_selected'));
//     dots[index].classList.add('dot_selected');
// }
// initSlide();

// // Changement de slide
// function changeSlide(direction) {
//     index = (index + direction + slides.length) % slides.length; // Gestion du débordement
//     initSlide();
// }

// // Événements sur les flèches
// arrowLeft.addEventListener('click', () => changeSlide(-1));
// arrowRight.addEventListener('click', () => changeSlide(1));



// //Événements sur les dots(en-plus)
// dots.forEach((dot, dotIndex) => {
//     dot.addEventListener('click', () => {
//         if (index !== dotIndex) { // Vérifie si le dot cliqué est différent du slide actuel
//             index = dotIndex; // Change l'index pour celui correspondant au dot cliqué
//             initSlide(); // Met à jour le slide
//         }
//     });
// });









// Sélection des éléments
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('.text');
const dots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow.arrow_left');
const arrowRight = document.querySelector('.arrow.arrow_right');

let index = 0;
let startX = 0; // Position initiale du doigt
let endX = 0;   // Position finale du doigt

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

// Événements sur les dots (en plus)
dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        if (index !== dotIndex) { // Vérifie si le dot cliqué est différent du slide actuel
            index = dotIndex; // Change l'index pour celui correspondant au dot cliqué
            initSlide(); // Met à jour le slide
        }
    });
});

// Gestion du glissement tactile
bannerImage.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Position du doigt au début
});

bannerImage.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Mise à jour de la position du doigt en mouvement
});

bannerImage.addEventListener('touchend', () => {
    if (startX - endX > 50) {
        // Glissement vers la gauche
        changeSlide(1);
    } else if (endX - startX > 50) {
        // Glissement vers la droite
        changeSlide(-1);
    }
    // Réinitialiser les positions
    startX = 0;
    endX = 0;
});









// Sélection des éléments
// Sélection des éléments
// const bannerImage = document.querySelector('.banner-img');
// const bannerText = document.querySelector('.text');
// const dots = document.querySelectorAll('.dot');
// const arrowLeft = document.querySelector('.arrow.arrow_left');
// const arrowRight = document.querySelector('.arrow.arrow_right');
// let index = 0;

// // Initialisation
// function initSlide() {
//     // Mise à jour de l'image et du texte
//     bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
//     bannerText.innerHTML = slides[index].tagLine;

//     // Mise à jour des dots
//     dots.forEach(dot => dot.classList.remove('dot_selected'));
//     dots[index].classList.add('dot_selected');

//     // Vérifie si c'est l'image numéro 4 (index = 3)
//     if (index === 3) {
//         // Ajouter un id pour modifier les styles
//         arrowLeft.id = 'black-theme';
//         arrowRight.id = 'black-theme';
//         bannerText.id = 'black-theme';
//         dots.forEach(dot => dot.id = 'black-theme');
        
//     } else {
//         // Supprimer l'id si ce n'est pas l'image 4
//         arrowLeft.removeAttribute('id');
//         arrowRight.removeAttribute('id');
//         bannerText.removeAttribute('id');
//         dots.forEach(dot => dot.removeAttribute('id'));
       
//     }
// }
// initSlide();

// // Changement de slide
// function changeSlide(direction) {
//     index = (index + direction + slides.length) % slides.length; // Gestion du débordement
//     initSlide();
// }

// // Événements sur les flèches
// arrowLeft.addEventListener('click', () => changeSlide(-1));
// arrowRight.addEventListener('click', () => changeSlide(1));

// // Événements sur les dots
// dots.forEach((dot, dotIndex) => {
//     dot.addEventListener('click', () => {
//         if (index !== dotIndex) {
//             index = dotIndex;
//             initSlide();
//         }
//     });
// });
