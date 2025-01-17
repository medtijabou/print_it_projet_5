// Array of slides containing image names and taglines
// Tableau de diapositives contenant les noms des images et les slogans
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

// Selecting HTML elements
// Sélection des éléments HTML
const bannerImages = document.getElementsByClassName('banner-img'); // Image of the current slide / Image de la diapositive actuelle
const bannerTagline = document.getElementsByClassName('text'); // Tagline of the current slide / Texte de la diapositive actuelle
const sliderDots = document.querySelectorAll('.dot'); // Navigation dots under the slideshow / Points de navigation sous le diaporama
const arrowLeft = document.querySelector('.arrow.arrow_left'); // Left arrow for navigation / Flèche gauche pour la navigation
const arrowRight = document.querySelector('.arrow.arrow_right'); // Right arrow for navigation / Flèche droite pour la navigation

let index = 0; // Index to track the current slide / Index pour suivre la diapositive actuelle

// Initialize the first slide
// Initialiser la première diapositive
bannerImages[0].src = "./assets/images/slideshow/" + slides[index].image; // Set the initial slide image / Définir l'image de la diapositive initiale
bannerTagline[0].innerHTML = slides[index].tagLine; // Set the initial tagline / Définir le texte initial
sliderDots[index].classList.add('dot_selected'); // Highlight the first dot / Mettre en évidence le premier point

// Add event listeners to the navigation arrows
// Ajouter des écouteurs d'événements aux flèches de navigation
arrowLeft.addEventListener('click', () => {
    ChangeSlide(-1); // Move to the previous slide when the left arrow is clicked / Passer à la diapositive précédente en cliquant sur la flèche gauche
});
arrowRight.addEventListener('click', () => {
    ChangeSlide(1); // Move to the next slide when the right arrow is clicked / Passer à la diapositive suivante en cliquant sur la flèche droite
});

// Function to change the slide
// Fonction pour changer la diapositive
function ChangeSlide(sens) {
    index += sens; // Update the index based on the direction (-1 for previous, +1 for next) / Mettre à jour l'index selon la direction (-1 pour précédent, +1 pour suivant)

    // Loop back to the first slide if the index exceeds the last slide
    // Revenir à la première diapositive si l'index dépasse la dernière
    if (index > slides.length - 1) index = 0;
    // Loop back to the last slide if the index goes below 0
    // Revenir à la dernière diapositive si l'index devient inférieur à 0
    if (index < 0) index = slides.length - 1;

    // Update the slide image and tagline based on the new index
    // Mettre à jour l'image et le texte de la diapositive selon le nouvel index
    bannerImages[0].src = "./assets/images/slideshow/" + slides[index].image;
    bannerTagline[0].innerHTML = slides[index].tagLine;

    // Update the dots to reflect the active slide
    // Mettre à jour les points pour refléter la diapositive active
    sliderDots.forEach(dot => dot.classList.remove('dot_selected')); // Remove active class from all dots / Supprimer la classe active de tous les points
    sliderDots[index].classList.add('dot_selected'); // Add active class to the current dot / Ajouter la classe active au point actuel
}
