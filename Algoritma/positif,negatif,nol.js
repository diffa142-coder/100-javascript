const prompt = require('prompt-sync')({ sigint: true });

let angka = parseInt(prompt('masukan bialng :'));

if (angka > 0) {
    console.log("bilangan positif");
} else if (angka < 0) {
    console.log("bilangan negatif");
} else {
    console.log("bilangan Nol");
}