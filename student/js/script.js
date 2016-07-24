const STUD_MARKS = [];

var submit = document.querySelector("#submit");

submit.addEventListener('click', () => {
	let name = document.querySelector("#std_name").value;
	let std_cls = Number(document.querySelector("#std_class").value);
	let english = Number(document.querySelector("#eng").value);
	let hindi = Number(document.querySelector("#hin").value);
	let account = Number(document.querySelector("#acc").value);
	let o_c = Number(document.querySelector("#oc").value);
	let s_p = Number(document.querySelector("#sp").value);
	let economics = Number(document.querySelector("#eco").value);

	//	console.log("name = " + name);
	//	console.log("Class = " + std_cls);
	//	console.log("English = " + english);
	//	console.log("hindi = " + hindi);
	//	console.log("account = " + account);
	//	console.log("oc = " + o_c);
	//	console.log("sp = " + s_p);
	//	console.log("economics = " + economics);
	//	console.log("Total = " + total);

	STUD_MARKS.push(new Student_mark(name, std_cls, english, hindi, account, o_c, s_p, economics));
});

function Student_mark(name, std_cls, english, hindi, account, o_c, s_p, economics) {
	this.name = name;
	this.std_cls = std_cls;
	this.english = english;
	this.hindi = hindi;
	this.account = account;
	this.o_c = o_c;
	this.s_p = s_p;
	this.economics = economics;

	this.total = function () {
		//		console.log(this.english, this.hindi, this.account, this.o_c, this.s_p, this.economics);
		let add = this.english + this.hindi + this.account + this.o_c + this.s_p + this.economics;

		return add;
	}
	this.getResult = function result() {
		let percentage = ((this.total() / 600) * 100);
		return {
			percentage,
			total: this.total()
		};
		//  ERROR  obj persentage : 75 , this.total : 700
	}
}

//function getMarks() {
//	var insertData = new Student_mark(stud_name, stud_class, eng, hin, acc, oc, sp, eco);
//
//	return insertData;
//}
