const prompt = require('prompt-sync')({ sigint: true });

let bilangan = Number(prompt('masukan bilangan bulat positif : '));

if (bilangan <= 0 || isNaN(bilangan)) {
    console.log('input tidak valid');
} else {
    let angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let hasil = '';

    for (let i = 0; i < angka.length; i++) {
        while (bilangan >= angka[i]) {
            hasil += romawi[i];
            bilangan -= angka[i];
        }
    }

    console.log(`angka romawi: ${hasil}`);
}