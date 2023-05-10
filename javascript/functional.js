//Calculator to convert Celsius <=> Fahrenheit
function convert(scale, temp) {
	if (scale === "c") {
		return `${(temp - 32) * 5 / 9} Cº`
	}
	if (scale === "f") {
		return `${(temp * 9 / 5) + 32} Fº`
	}
}

//Expected output: 15 Cº
console.log(convert("c", 59))
//Expected output: 86º F
console.log(convert("f", 30))