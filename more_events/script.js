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



// // creating objects by using factory function 
// function Person ( name, age, gender ) {
// 	this.name = name;
// 	this.age = age;
// 	this.gender = gender;
// 	this.getGender = function () {
// 		return this.gender;
// 	};
// }

// var sumit = new Person('sumit', '23','male');
// var mayut = new Person.create('mayur', '25', 'male');

// let newNamne = String( prompt('Name')   );

// const USER__DATA = [];

// function init ( ) {
// var newPerson = new Person( newNamne , newAge , newGender  );	
 
//  USER__DATA.push(  newPerson  );
// } 
 
// Person.constructor();
// //  Function


// // typeof sumit == objects
// sumit.getGender();
// //  male

// // createing objects using prototyping
// function Someperson( name, age, gender ) {
// 	Someperson.prototype.__name = name;
// 	Someperson.prototype.__age =age;
// 	Someperson.prototype.__gender = gender;
// 	Someperson.prototype.__getGender = function() {
// 		return this.gender;
// 		// Or  return Someperson.prototype.gender;
// 	}
// }

// var ravindra = Someperson('Ravindra', '24', 'male');
// typeof ravindra // objects
// ravindra.__getGender();




// function udata(name, pass) {
// 	return {name, pass}
// }
// // Objcet ( "name":'' , "pass": '' )



