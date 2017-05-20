const contact = {
	data: [
		{
			initial: "I",
			name: "Infinity",
			isFav: false
		},
		{
			initial: "S",
			name: "sumit",
			isFav: false
		},
		{
			initial: "T",
			name: "Tanmay",
			isFav: false
		},
		{
			initial: "U",
			name: "Umang",
			isFav: false
		},
		{
			initial: "V",
			name: "Vaibhav",
			isFav: false
		},
		{
			initial: "W",
			name: "Whastapp",
			isFav: false
		},
		{
			initial: "X",
			name: "Xender",
			isFav: false
		},
		{
			initial: "Y",
			name: "Yogita",
			isFav: false
		},
		{
			initial: "Z",
			name: "Zakir",
			isFav: false
		},
		{
			initial: "A",
			name: "Anant",
			isFav: false
		},
		{
			initial: "B",
			name: "Bacchan",
			isFav: false
		}
	]
};









// app logic

const boxContainer = document.querySelector("#bxc");
const box = document.createElement('div');
box.setAttribute("box");



subtitle.appendChild(name);
//Array.from(contact.data,(d)=>{
//
//console.log(d.initial, d.name, d.isFav);
//})



Array.from(contact.data, (d) => {
	boxContainer.innerHTML = `<div class="box">
	<div class="title">${d.initial}</div>
	<div class="subtitle">
		<div class="name">${d.name}</div>
		<div class="star">*</div>
	</div>
</div>`;
});
