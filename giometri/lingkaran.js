const prompt = require('prompt-sync')({sigint:true});

let r = parseFloat(prompt('Masukkan jari-jari lingkaran : '));

let luas = Math.PI * r * r;
let keliling = 2 * Math.PI * r;

console.log(`Luas      : ${luas.toFixed(2)} cm²`);
console.log(`Keliling  : ${keliling.toFixed(2)} cm`);