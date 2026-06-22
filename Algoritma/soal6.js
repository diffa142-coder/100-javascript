const prompt = require('prompt-sync')({ sigint: true });

let nilaiBelanja = Number(prompt('masukan nilai total belanja : '));

let nilaiBulat = Math.floor(nilaiBelanja / 25) * 25;

console.log(`nilai belanja setelah dibulatkan: Rp ${nilaiBulat}`);