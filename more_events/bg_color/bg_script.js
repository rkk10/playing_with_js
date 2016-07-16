var r = document.querySelector('.r');
var g = document.querySelector('.g');
var b = document.querySelector('.b');

var rgb = document.querySelectorAll('input');

for (let i of rgb) {
	i.addEventListener('change', () => {
		let red = r.value;
		let green = g.value;
		let blue = b.value;

		document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`;
	});
}
