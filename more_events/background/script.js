document.addEventListener('mousemove', (e) => {
	let x = e.clientX;
	let y = e.clientY;

	document.body.style.backgroundColor = `rgb( ${x}, ${y}, 200 )`;
});
