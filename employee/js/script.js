const EMP_DETAIL = [];

var submit = document.querySelector("#submit");

submit.addEventListener('click', () => {
	let emp_name = document.querySelector("#full-name").value;
	let emp_cont = Number(document.querySelector("#emp-cont").value);
	let emp_addr = (document.querySelector("#emp-addr").value);
	let emp_email = (document.querySelector("#emp-email")).value;
	let emp_salary = Number(document.querySelector("#sal").value);

	console.log(emp_name);

	/*let gender = () => {
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
};*/



	EMP_DETAIL.push(getDetails(emp_name, emp_cont, emp_addr, emp_email, emp_salary));
});

function Employee(emp_name, emp_cont, emp_addr, emp_email, emp_salary) {
	this.name = emp_name;
	this.cont = emp_cont;
	this.address = emp_addr;
	this.email = emp_email;
	this.sal = emp_salary;
	this.getSal = function salary() {
		return this.sal;
	}


}

function getDetails(name, cont, address, email, sal) {

	var details = new Employee(name, cont, address, email, sal);

	return details;
}
