const hamburgerButton = document.querySelector('.burger-menu__button');
const hamburgerNav = document.querySelector('.burger-menu__nav');
const hamburgerMenu = document.querySelector('.burger-menu');
const hamburgerBcg = document.querySelector('.burger-menu__overlay');
const dotsSlider = document.querySelectorAll('.bottom_slider div');
const prevSlider = document.querySelector('.section_reviews_slider-prev');
const nextSlider = document.querySelector('.section_reviews_slider-next');
const slider = document.querySelectorAll('.section_reviews_slider');
let currentSlider = 0;

hamburgerButton.addEventListener('click', function(ev) {
	hamburgerMenu.classList.toggle('burger-menu_active');
})

window.onmousedown = function(event) {
	if (hamburgerMenu.classList.contains('burger-menu_active') && 
		 (event.target === hamburgerButton || event.target === hamburgerBcg)
	   ) {
		hamburgerMenu.classList.toggle('burger-menu_active');
	} 
}

function resetActiveDot(){
	for (let i = 0; i < dotsSlider.length; i++) {
		dotsSlider[i].classList.remove('point_slider-active');
		dotsSlider[i].style.opacity = 0.6;
	}
}

function addActiveDot(){
	for (let i = 0; i < dotsSlider.length; i++) {
		dotsSlider[i].addEventListener('click', function() {
			resetActiveDot();
			resetSliders();
			slider[i].style.display = 'block';
			currentSlider = i;
			dotsSlider[i].classList.add('point_slider-active');
			dotsSlider[i].style.opacity = 1;
		})
	}
}

function resetSliders() {
	for (let i = 0; i < slider.length; i++) {
		slider[i].style.display = 'none';
		dotsSlider[i].classList.remove('point_slider-active');
	}
}

function startSlider() {
	resetSliders();
	resetActiveDot();
	slider[0].style.display = 'block';
	dotsSlider[0].classList.add('point_slider-active');
	dotsSlider[0].style.opacity = 1;
}

prevSlider.addEventListener('click', function() {
	resetActiveDot();
	resetSliders();
	if (currentSlider === 0) {
		currentSlider = slider.length;
	}
	slider[currentSlider - 1].style.display = 'block';
	dotsSlider[currentSlider - 1].classList.add('point_slider-active');
	currentSlider--;
})

nextSlider.addEventListener('click', function() {
	resetActiveDot();
	resetSliders();
	if (currentSlider === slider.length - 1) {
		currentSlider = -1;
	}
	slider[currentSlider + 1].style.display = 'block';
	dotsSlider[currentSlider + 1].classList.add('point_slider-active');
	currentSlider++;
})

addActiveDot();
startSlider();