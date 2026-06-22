 const prompt = require('prompt-sync')({ sigint: true });

let bilangan = Number(prompt('masukan bilangan bulat positif : '));

if (bilangan <= 0 || isNaN(bilangan)) {
    console.log('bilangan tidak valid');
} else {
    if (bilangan % 4 === 0) {
        console.log(`${bilangan} merupakan kelipatan 4`);
    } else {
        console.log(`${bilangan} bukan kelipatan 4`);
    }
}