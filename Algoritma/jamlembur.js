const prompt = require('prompt-sync')({ sigint: true });

let nama = prompt("Masukkan nama karyawan: ");
let golongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let jamKerja = parseInt(prompt("Masukkan jumlah jam kerja seminggu: "));

let upahPerJam;

if (golongan === "A") {
    upahPerJam = 4000;
} else if (golongan === "B") {
    upahPerJam = 5000;
} else if (golongan === "C") {
    upahPerJam = 6000;
} else if (golongan === "D") {
    upahPerJam = 7500;
} else {
    console.log("Golongan tidak valid");
    process.exit();
}

let gaji;

if (jamKerja <= 48) {
    gaji = jamKerja * upahPerJam;
} else {
    let lembur = jamKerja - 48;

    gaji =
        (48 * upahPerJam) +
        (lembur * 3000);
}

console.log("\nNama       :", nama);
console.log("Golongan   :", golongan);
console.log("Jam Kerja  :", jamKerja);
console.log("Total Gaji : Rp" + gaji);