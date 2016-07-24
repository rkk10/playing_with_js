/*
document.addEventListener('click', (event) => {
	getTagname(event);
});

function getTagname(event) {
	this.target = event.target;
	this.height = event.target.clientHeight;
	this.width = event.target.clientWidth;
	console.log(this.target);
	console.log("height = " + this.height + " Width =  " + this.width);

}
*/
const PHONE_BOOK = [];

var btn = document.querySelector('#submit-btn');

btn.addEventListener('click', () => {
	let name = document.querySelector("#ful-name").value;
	let mob = Number(document.querySelector("#mobile-no").value);
	let home = Number(document.querySelector("#home-cont").value);
	console.log(typeof name);


	PHONE_BOOK.push(setValue(name, mob, home));


});

function Phonebook(name, mob, home) {
	this.name = name;
	this.mob = mob;
	this.home = home;
	this.getContact = function cont() {
		return this.home;
	}
}


function setValue(a, b, c) {

	//	console.log(name);
	var newData = new Phonebook(a, b, c);

	return newData;
}
