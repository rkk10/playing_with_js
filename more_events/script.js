document.addEventListener('click', (e) => {
	if (e.target.tagName == 'DIV') {
		console.log("card");
		getBcr(e);
	} else {
		console.log("not card");
	}






});

function getBcr(e) {
	this.target = e.target;
	console.log(this.target);
	this.targetBcr = this.target.getBoundingClientRect();
	console.log(this.target.offsetWidth, this.target.offsetHeight);
	console.log(this.targetBcr);
}
