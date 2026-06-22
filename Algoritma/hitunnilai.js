const prompt = require('prompt-sync')({ sigint: true });

let nilai = parseInt(prompt("Masukkan nilai ujian: "));

if (nilai >= 80) {
    console.log("Indeks nilai = A");
} else if (nilai >= 70) {
    console.log("Indeks nilai = B");
} else if (nilai >= 55) {
    console.log("Indeks nilai = C");
} else if (nilai >= 40) {
    console.log("Indeks nilai = D");
} else {
    console.log("Indeks nilai = E");
}