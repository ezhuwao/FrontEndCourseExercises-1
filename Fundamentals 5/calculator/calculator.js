function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
	
}

function sum (arr) {
 let total = arr.reduce(function(x,y){
	 return x+y;
 }, 0);
 return total;
}

function multiply (arr) {
	let init =1;
	for (let i=0; i<arr.length; i++){
		init = init* arr[i];
	}
	return init;	
}

function power(a,b) {
	return a**b;
	
}

function factorial(n) {
	if (n>1){
		return n* factorial(n-1);
	}
	return 1;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}