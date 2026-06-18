const prompt = require('prompt-sync')({ sigint: true });

let tinggi = parseFloat(prompt("Masukkan tinggi badan: "));

let hasil = tinggi - 100;
let ideal = hasil - (hasil * 0.1);

console.log("Berat badan ideal =", ideal, "kg");