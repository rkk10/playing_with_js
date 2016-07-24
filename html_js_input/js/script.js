const DIARY = [];

var submit = document.querySelector("#submit-btn");

submit.addEventListener('click', () => {
	let full_name = (document.querySelector("#full-name").value);
	let dob = (document.querySelector("#dob").value);
	let mob = (document.querySelector("#mob-num").value);
	let home = (document.querySelector("#home-num").value);
	let addr = (document.querySelector("#addr").value);
	let gender = () => {
		let male = document.querySelector('#male');
		let female = document.querySelector('#female');
		if (male.checked) {
			let g = 'male'
			return g;
		}

		if (female.checked) {
			let g = 'female'
			return g;
		}
		return g;
	};

	DIARY.push(setValues(full_name, dob, gender(), mob, home, addr));

	//	console.log(full_name);
});

function Diary(name, dob, gender, mob_no, home_no, address) {
	this.name = name;
	this.dob = dob;
	this.gender = gender;
	this.mob_no = mob_no;
	this.home_no = home_no;
	this.address = address;
	this.getAddress = function addr() {
		return this.address;
	}
}

function setValues(fname, bday, gender, mob_cont, home_cont, add) {
	var enterdData = new Diary(fname, bday, gender, mob_cont, home_cont, add);
	return enterdData;
	//console.log(enterdData);
}
