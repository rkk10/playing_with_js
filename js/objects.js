/*
var english = Number(prompt("Enter Marks Of English"));
var hindi = Number(prompt("Enter Marks Of Hindi"));
var physics = Number(prompt("Enter Marks Of physics"));
var chemestry = Number(prompt("Enter Marks Of chemestry"));
var mathematics = Number(prompt("Enter Marks Of Mathematics"));

var studeMarks = {
    "eng" : 10,
    "hin": 20,
    "phy": 10,
    "che":5,
    "math":3
}

studeMarks.hin = hindi;
studeMarks.eng = english;
studeMarks.phy = physics;
studeMarks.che = chemestry;
studeMarks.math = mathematics;

console.log("Hindi =", studeMarks.hin);
console.log("English =", studeMarks.eng);
console.log("Physics =", studeMarks.phy);
console.log("chemestry = ",studeMarks.che);
console.log("Mathematics = ",studeMarks.math);

const TOTAL_MARKS = 600;

function result(foo) {
    let obtMarks = (studeMarks.eng + studeMarks.hin + studeMarks.phy + studeMarks.che + studeMarks.math);
    let percent = (obtMarks/foo) * 100 ;
    console.log("Total Obtained Marks = ",obtMarks);
    console.log("Total marks =", foo);
    console.log("Perecentage = ",percent)
}
result(TOTAL_MARKS);

*/

const STUD_MARKS = [];

function Marks(name,total_marks, passing_marks, obtain_marks) {
    return{
         name,
         passing_marks,
         total_marks,
         obtain_marks,
         percent : (obtain_marks / total_marks) * 100                   
    }
}

function cal() {
    const TOTAL= 600;
    const PSM = 240;
    name = (prompt('Enter Name'));
    Math = parseInt(prompt('Enter Math'));
    Phy = parseInt(prompt('Enter Phy'));
    Hindi = parseInt(prompt('Enter Hindi'));
    Eng = parseInt(prompt('Enter Eng'));
    Che = parseInt(prompt('Enter Che'));
    Bio = parseInt(prompt('Enter Bio'));

    let obtMarks = (Math + Phy + Hindi + Eng + Che + Bio);

    STUD_MARKS.push(Marks( name,TOTAL, PSM ,obtMarks));
}
cal();