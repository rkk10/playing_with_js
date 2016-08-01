var menu_open = document.querySelector('#menu_open');
var menu_close = document.querySelector('#menu_close');

var nav_menu = document.querySelector(".aside-menu");
var header = document.querySelector(".sec-head");

menu_open.addEventListener('click', () => {

    nav_menu.style.left = '0px';
    //    nav_menu.style.marginLeft = '250px';
    //    header.style.background = 'blue';

    //    nav_menu.style.background = 'blue';


});

menu_close.addEventListener('click', () => {
    nav_menu.style.left = '-350px';
    //    nav_menu.style.marginLeft = '0';
});
