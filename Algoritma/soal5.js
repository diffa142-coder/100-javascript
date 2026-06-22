const prompt = require('prompt-sync')({ sigint: true });

let karakter = prompt('masukan sebuah karakter : ');
let nilaiInteger;

if (karakter.length === 1 && karakter >= '0' && karakter <= '9') {
    nilaiInteger = Number(karakter);
} else {
    nilaiInteger = -99;
}

console.log(`hasil konversi: ${nilaiInteger}`);