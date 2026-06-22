const prompt = require('prompt-sync')({ sigint: true });

let berat = Number(prompt('masukan berat badan (kg)  : '));
let tinggi = Number(prompt('masukan tinggi badan (cm) : '));

let beratIdeal = tinggi - 100;

if (Math.abs(berat - beratIdeal) <= 2) {
    console.log('ideal');
} else {
    console.log('tidak ideal');
}