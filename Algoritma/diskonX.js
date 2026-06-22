const prompt = require('prompt-sync')({ sigint: true });

let totalBelanja = Number(prompt('masukan nilai total belanja : '));
let diskon = 0;

if (totalBelanja > 100000) {
    diskon = totalBelanja * 0.1;
}

let totalBayar = totalBelanja - diskon;

console.log(`diskon harga: Rp ${diskon}`);
console.log(`nilai belanja setelah dikurangi diskon: Rp ${totalBayar}`);