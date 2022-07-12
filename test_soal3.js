
function output1(jmlbintang) {
	let hasil = "";
	for (let i = 0; i < jmlbintang; i++) {
		for (let j = 0; j <= i; j++) {
			hasil += "*";
		}
		hasil += "\n";
	}
	return hasil;
}
console.log(output1(6));

function output2(jmlbintang) {
	let hasil = "";
	for (let i = jmlbintang; i > 0; i--) {
		for (let j = 1; j <= jmlbintang; j++) {
			if (j >= i) {
				hasil += "*";
			} else {
				hasil += " ";
			}
		}
		hasil += "\n";
	}
	return hasil;
}
console.log(output2(5));