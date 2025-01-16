const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// selction d'image de slide
const bannerImage = document.getElementsByClassName ('banner-img');
const bannerTagline = document.getElementsByClassName ('text');


// select slider

const sliderDots = document.querySelectorAll ('.dot');

//image d'accueil

let index = 0;
bannerImage[index].src="./assets/images/slideshow/" + slides[index].image;
bannerTagline[index].innerHTML = slides[index].tagLine;



// selecteur flèche left et right

const arrowLeft = document.querySelector ('arrow_left');
const arrowRight = document.querySelector ('arrow_right');

// fonction click sur les flèches

arrowLeft.addEventListener ('click',() =>{
	ChangeSlide(-1);
});
arrowLright.addEventListener ('click',() =>{
	ChangeSlide(1);
});

function ChangeSlide(sens) {	
	index += sens;
	if (index > slides.length - 1 )
	index = 0;
	if (index < 0)
	index = slides.length - 1;	

	bannerImage[0].src = "./assets/images/slideshow/" + slides[index].image;
	bannerTagline[0].innerHTML = slides[index].tagLine;

	sliderDots.forEach(sliderDots => sliderDots.classList.remove('dot_selected'));
	sliderDots[index].classList.add('dot_selected');	
};