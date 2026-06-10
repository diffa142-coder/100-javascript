const prompt = require('prompt-sync')({ sigint: true });

let r = parseFloat(prompt("Masukkan jari-jari bola : "));

let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
let luasPermukaan = 4 * Math.PI * Math.pow(r, 2);

console.log("\n=== HASIL PERHITUNGAN BOLA ===");
console.log("Jari-jari           : " + r);
console.log("Volume Bola         : " + volume.toFixed(2));
console.log("Luas Permukaan Bola : " + luasPermukaan.toFixed(2));