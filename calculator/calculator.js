function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (numbers) {
	if (numbers.length < 1) {return 0};
	let sum = 0
	return numbers.reduce((number, sum) => sum += number);
}

function multiply (values) {
	total = 0
	return values.reduce((value, total) => total *= value);
}

function power(value, exponent) {
	return(value ** exponent);
}

function factorial(value) {
/*	total = 1
	if(value == 1 || value == 0){return 1};
	while (value > 1){
		total *= value
		value--;
		
	}
	return total;
*/
	total = 1
	if(value == 0 || value == 1){return 1};
	for(let i = value; i >= 1; i--){
		total *= i;
	}
	return total

}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}