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


/*click event for know the type of tag and its properties*/

document.body.addEventListener('click', (e) => {
	getShape(e);

});

function getShape(e) {
	this.target = e.target;
	console.log(this.target);
	this.targetBcr = this.target.getClientRects();
	console.log('Hight = ' + this.target.offsetHeight);
	console.log('Width = ' + this.target.offsetWidth);
}
