const prompt = require('prompt-sync')({ sigint: true });

let tahun = parseInt(prompt("Masukkan tahun: "));

if (tahun % 4 === 0) {
    console.log("Tahun kabisat");
} else {
    console.log("Bukan tahun kabisat");
}