const sumAll = function(min, max) {
	let sum = 0
	if (min < 0 || max < 0) return("ERROR");
	if (typeof min !== "number" || typeof max !== "number") return "ERROR";
	if (min > max){
		let newMax = min
		min = max
		max = newMax
	}

	for (i = min; min <= max; max--){
		sum += max
	}
	return sum
}

module.exports = sumAll
