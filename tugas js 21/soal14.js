const prompt = require('prompt-sync')({ sigint: true });

let angka = parseInt(prompt("Masukkan sebuah angka : "));

if (angka > 100) {
    console.log("Nilai kamu sempurna!");
} 

else {
    console.log("Nilai kamu belum sempurna.");
}