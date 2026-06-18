const prompt = require('prompt-sync')({ sigint: true });

let x = parseInt(prompt("x: "));
let y = parseInt(prompt("y: "));
let z = parseInt(prompt("z: "));

let temp = x;

x = y;
y = z;
z = temp;

console.log("x =", x);
console.log("y =", y);
console.log("z =", z);