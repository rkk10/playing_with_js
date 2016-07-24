/* left menu */

var left_menu = document.querySelector('#menu_btn');
var close = document.querySelector('#close_btn');

var nav = document.querySelector('.nav_container');
left_menu.addEventListener('click', () => {
	// if (left_menu.classList.contains == 'menu')
	// return;

	nav.style.translate = '0px';


});

close.addEventListener('click', () => {
	// if (left_menu.classList.contains == 'menu')
	// return;

	nav.style.translate = '-350px';


});
