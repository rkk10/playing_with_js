var obj = {
    foo: "bar"
};
var clone = Object.assign({}, obj);

// obj === clone   false

var newClone = Object.assign({}, clone, {
    foo: "baaz"
});


var User = {
    data: {
        initial: "A",
        name: "Amol"
    },
    isFav: false
};

var User_2 = Object.assign({}, User, {
    data: {
        initial: "B",
        name: "baban"
    }
});



function bin(num){
	return parseInt(num,10).toString(2);
}

function oct(num) {
	return parseInt(num, 10).toString(8);
}

function hexadecimal(num) {
	return parseInt(num, 10).toString(16);
}