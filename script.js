const burgerBtn = document.querySelector('.header-burger');
const leftMenu = document.querySelector('.left-menu');
const space = document.querySelector('.header-burger-space');
const burherLink = document.querySelectorAll('.header-menu-burger__link');
const html = document.querySelector('html');



burgerBtn.addEventListener('click', function(){
	burgerBtn.classList.toggle('active');
	leftMenu.classList.toggle("left-menu__active");
	html.classList.toggle("overflow-h");
	space.classList.toggle("active-space");
})

