const prompt = require('prompt-sync')({ sigint: true });

let jam = parseInt(prompt("Masukkan jumlah jam kerja: "));
let upah;

if (jam <= 48) {
    upah = jam * 2000;
} else {
    let lembur = jam - 48;
    upah = (48 * 2000) + (lembur * 3000);
}

console.log("Total upah mingguan = Rp" + upah);