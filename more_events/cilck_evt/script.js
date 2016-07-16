document.addEventListener('click', (e) => {
	if (e.target.tagName == 'HEADER') {
		console.log('Circle');
		getShape(e);
	} else {
		console.log('Not a circle');
	}
});

function getShape(e) {
	this.target = e.target;
	console.log(this.target);
	this.targetBcr = this.target.getBoundingClientRect();
	console.log(this.target.offsetWidth, this.target.offsetHeight);
	console.log(this.targetBcr);
}
