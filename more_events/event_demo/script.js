document.addEventListener('click', (e) => {
	if (e.target.tagName == 'DIV') {
		console.log("hotpink");
		getBcr(e);
	} else {
		console.log("not Hotpink");
	}
});

function getBcr(e) {
	this.target = e.target;
	console.log(this.target)
	this.targetBcr = this.target.getClientRects();
	console.log(this.target.offsetWidth, this.target.offsetHeight);
	console.log(this.targetBcr);
}
