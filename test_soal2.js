
var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";

function stringContainsNumber(_input) {
	let input1 = String(_input);
	for (let i = 0; i < input1.length; i++) {
		if (!isNaN(input1.charAt(i)) && !(input1.charAt(i) === " ")) {
			return true;
		}
	}
	return false;
}

console.log(stringContainsNumber(input1) ? "Sistem kami menolak untuk inputan berisi angka " : "Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input2 + "");
console.log(stringContainsNumber(input2) ? "Sistem kami menolak untuk inputan berisi angka 24" : "Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input2 + "");

