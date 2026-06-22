const prompt = require('prompt-sync')({ sigint: true });

let banyakNilai = Number(prompt('Masukkan banyak inputan nilai: '));
let total = 0;

for (let i = 1; i <= banyakNilai; i++) {
    let nilai = Number(prompt(`Masukkan nilai ke-${i}: `));
    total += nilai;
}

let rataRata = total / banyakNilai;

console.log(`Jumlah    : ${total}`);
console.log(`Rata-rata : ${rataRata}`);