/* by using tagNames */

// var allDiv = document.getElementsByTagNameNS("div");

// for (let ele of allDiv){
//     ele.addEventListener('click', () =>{
//         if (ele.classList.contains != 'move-event') {
//             ele.classList.add('move-event');
//         }
//     });
// }

/* by using getElementsByTagName */

var allDiv = document.getElementsByClassName('circle');
// var classNames = ['move-event'];

for (let ele of allDiv){
    ele.addEventListener('click', () =>{
       ele.classList.add('move-event');       
       
    });
}

/* by using document.qurySelector */

var log_box = document.querySelector('.log')

log_box.addEventListener('click', () => {
   if (log_box.classList.contains == 'login')
       return;
       
       log_box.classList.add('login'); 
});

var aside_menu = document.querySelector('.menu');

aside_menu.addEventListener('click', () =>{
    if (aside_menu.classList.contains == 'login')
    return;
    
    aside_menu.classList.add('login');
});