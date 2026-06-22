const prompt = require('prompt-sync')({ sigint: true });

let tahun = parseInt(prompt("Masukkan tahun: "));

if ((tahun % 400 === 0) || (tahun % 4 === 0 && tahun % 100 !== 0)) {
    console.log("Tahun kabisat");
} else {
    console.log("Bukan tahun kabisat");
}