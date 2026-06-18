const prompt = require('prompt-sync')({ sigint: true });

let meter = parseFloat(prompt("Masukkan meter: "));

let inch = meter / 0.0254;
let kaki = meter / 0.3048;
let yard = meter / 0.9144;

console.log("Inch =", inch);
console.log("Kaki =", kaki);
console.log("Yard =", yard);