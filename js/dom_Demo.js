
var divWithID = document.getElementById('mydiv');
var divWithNAME = document.getElementsByName('mydiv');
var div = document.getElementsByTagName('div');
var divWithCLASS = document.getElementsByClassName('mydiv');

var allTypesDiv = document.querySelector('#mydiv');
var allDIVInARRAY = document.querySelectorAll('div');

 var classNames = ['my-hover-styles','my-active-styles']

for (let eachDiv of div) {


    eachDiv.addEventListener('click', () => {
        eachDiv.classList.add('my-active-styles');
    });
}