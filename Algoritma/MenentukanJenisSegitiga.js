const prompt = require('prompt-sync')({ sigint: true });

let a = Number(prompt('masukan panjang sisi a : '));
let b = Number(prompt('masukan panjang sisi b : '));
let c = Number(prompt('masukan panjang sisi c : '));

if (a <= b && b <= c && a > 0) {
    let kuadratSisiTegak = (a * a) + (b * b);
    let kuadratSisiMiring = c * c;

    if (kuadratSisiTegak === kuadratSisiMiring) {
        console.log('membentuk segitiga siku-siku');
    } else if (kuadratSisiTegak > kuadratSisiMiring) {
        console.log('membentuk segitiga lancip');
    } else {
        console.log('membentuk segitiga tumpul');
    }
} else {
    console.log('input tidak valid atau tidak memenuhi syarat a <= b <= c');
}