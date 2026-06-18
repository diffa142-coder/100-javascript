const prompt = require('prompt-sync')({ sigint: true });

let totalDetik  = parseFloat(prompt("masukan durasi detik"));
let hati = Math.floor(totalDetik / 86400);
let sisa = totalDetik % 86400;
let jam = Math.floor(sisa / 3600);
sisa = sisa % 3600;
let menit = Math.floor(sisa / 60)

console.log("Hari :", hari);
console.log("Jam :", jam);
console.log("Menit :", menit);
console.log("Detik :", detik);