var numOne = document.querySelector('#num-1');
var numTwo = document.querySelector('#num-2');

var add = Number(numOne.value) + Number(numTwo.value);
// add ex. 5
// add = '<h1>hello</h1>'
 // var show = document.querySelector('.showResult');
var body = document.body;

var myDiv = document.createElement('div');
//  <div></div>


myDiv.textContent = add;
myDiv.setAttribute("class", 'zoo');

// <div>140</div>
// show.appendChild(myDiv);
