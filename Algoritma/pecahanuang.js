const prompt = require('prompt-sync')({ sigint: true });

let uang = parseInt(prompt("Masukkan uang: "));
let p1000 = Math.floor(uang / 1000);
uang %= 1000;
let p500 = Math.floor(uang / 500);
uang %= 500;
let p100 = Math.floor(uang / 100);
uang %= 100;
let p50 = Math.floor(uang / 50);
uang %= 50;
let p25 = Math.floor(uang / 25);

console.log("1000 =", p1000);
console.log("500 =", p500);
console.log("100 =", p100);
console.log("50 =", p50);
console.log("25 =", p25);