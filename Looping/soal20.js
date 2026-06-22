const prompt = require('prompt-sync')({ sigint: true });

let limit = Number(prompt('Masukkan Jumlah Perkalian: '));
let header = '*\t';

for (let i = 1; i <= limit; i++) {
    header += i + '\t';
}
console.log(header);

for (let i = 1; i <= limit; i++) {
    let baris = i + '\t';
    for (let j = 1; j <= limit; j++) {
        baris += (i * j) + '\t';
    }
    console.log(baris);
}