var showButton =
    document.querySelector('button:first-child');

var hideButton =
    document.querySelector('button:nth-child(2)');    
    
var boxwala = document.querySelector('.box');
    // boxwala.style.borderRadius = '50%';
    
    showButton.addEventListener('click', () =>{
        boxwala.classList.add('show');
    }); 
    
    hideButton.addEventListener('click', () =>{
        boxwala.classList.remove('show');
    });   