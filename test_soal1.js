
var data1 = [1, 1, 1, 2, 2, 4, 1, 1];

const mode = (arr) => arr.sort((a, b) => arr.filter((v) => v === a).length - arr.filter((v) => v === b).length).pop();
var jml = 0;
const result = data1.reduce((count, num) => (num === 1 ? count + 1 : count), 0);

console.log(" total data paling banyak keluar adalah " + mode(data1) + " dengan jumlah " + result + "");