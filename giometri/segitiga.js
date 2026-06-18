const prompt =require('prompt-sync')({sigint:true});

let alas = parseFloat(prompt("Masukkan alas:"));
let tinggi = parseFloat(prompt("Masukkan tinggi:"));

let a = parseInt(prompt(`masukan sisi a:`))
let b = parseInt(prompt(`masukan sisi b:`))
let c = parseInt(prompt(`masukan sisi c:`))

let keliling = a + b + c;
let luas = 0.5 * alas * tinggi;

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling :${keliling.toFixed(2)}cm`);