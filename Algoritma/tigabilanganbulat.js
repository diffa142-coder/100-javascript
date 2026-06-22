const prompt = require('prompt-sync')({ sigint: true });

let a = Number(prompt('masukan bilangan pertama : '));
let b = Number(prompt('masukan bilangan kedua   : '));
let c = Number(prompt('masukan bilangan ketiga  : '));

let angka = [a, b, c];
angka.sort((x, y) => x - y);

console.log(`tiga buah bilangan terurut: ${angka[0]}, ${angka[1]}, ${angka[2]}`);