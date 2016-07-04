/*mathematica operations es6 feature*/
// var math = {

//   add: (a, b) => a + b,
//   sub: (a, b) => a - b,
//   mul: (a, b) => a * b,
//   div: (a, b) => a / b,
//   mod: (a, b) => a % b
// };

/*by using object and function */

// var myMathLib = {
//   add: function (a, b) {
//     return c = a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
//   div: function (a, b) {
//     return a / b;
//   },
//   mod: function (a, b) {
//     return a % b;
//   } 
// };


/* sttudent result */

// var result = {
//   hindi: parseInt(prompt("Hindi")),
//   english: parseInt(prompt("English")),
//   phy: parseInt(prompt("Physics")),
//   che: parseInt(prompt("Chemestry")),
//   math: parseInt(prompt("Maths")),
//   obt_marks: () => {
//     sum = result.hindi + result.english + result.phy + result.che + result.math;
//     result.obt_marks = sum;
//   },
//   percent: () => {
//     pert = (result.obt_marks / 600) * 100;
//     result.percent = pert;
//   },
//   status: () => {
//     result.obt_marks();
//     result.percent();
//     if (result.percent >= 35) {
//       result.status = true;
//     } else {
//       result.st = false;
//     }
//   }
// };
// result.status();



/*Employee salary*/
{
  'use strict';
  var emp = {
    emp_name: (prompt("Employee Name")),
    emp_post: (prompt("Employee post")),
    emp_salary: parseFloat(prompt("Employee Salary")),


    gros_salary: () => {

      let emp_pf = (emp.emp_salary / 10);
      let emp_insu = (emp.emp_salary / 100) * 2;
      let emp_service_tax = (emp.emp_salary / 100) * 2;
      let total = emp.emp_salary + emp_pf + emp_insu + emp_service_tax;
      emp.gros_salary = total;

      return { emp_pf, emp_insu, emp_service_tax, total },
      console.log( emp_pf, emp_insu, emp_service_tax, total )
    }
  };
}
emp.gros_salary();




// const USERS = [];


// function getValues(foo, boo) {

//   return {
//     uname: foo,
//     rep_count: boo
//   };
// }

// function putValues() {
//   var name = (prompt("uname"));
//   var rep_cnt = parseInt(prompt("repository count"));
  
//   USERS.push(getValues(name, rep_cnt));
// }
// putValues();



