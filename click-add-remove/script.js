var goButtton = document.querySelector('button:first-child');
var backButton = document.querySelector('button:nth-child(2)');

var runner = document.querySelector('.box');
 
goButtton.addEventListener('click' || 'mousedown', () => {
    runner.classList.add('runner_box');
    
    if (runner.classList.contains('runner_box')) {
    runner.classList.add('window_reverse');
}
});

backButton.addEventListener('click', () => {
    runner.classList.remove('runner_box');
    
    if (!runner.classList.contains('runner_box')) {
    runner.classList.remove('window_reverse');
    }
});

var upButton = document.getElementById('upBtn');
var downButton = document.querySelector('#downBtn');

var launch = document.querySelector('.lift');

upButton.addEventListener('click' || 'mousedown', () => {
    launch.classList.add('launchUp');
});

downButton.addEventListener('click', () => {  
    
    launch.classList.remove('launchUp');
});