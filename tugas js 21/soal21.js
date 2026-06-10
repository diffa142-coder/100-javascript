const prompt = require('prompt-sync')({ sigint: true });

let nama = prompt("Masukkan nama siswa: ");
let nilai = parseInt(prompt("Masukkan nilai (0-100): "));

if (nilai >= 90 && nilai <= 100) {
    console.log("Nama :", nama);
    console.log("Grade: A");
}
else if (nilai >= 80 && nilai < 90) {
    console.log("Nama :", nama);
    console.log("Grade: B");
}
else if (nilai >= 70 && nilai < 80) {
    console.log("Nama :", nama);
    console.log("Grade: C");
}
else if (nilai >= 60 && nilai < 70) {
    console.log("Nama :", nama);
    console.log("Grade: D");
}
else if (nilai >= 0 && nilai < 60) {
    console.log("Nama :", nama);
    console.log("Grade: E");
}
else {
    console.log("Nilai tidak valid");
}