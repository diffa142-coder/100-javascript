const prompt =require('prompt-sync')({sigint:true});

let z = parseInt(prompt("masukan nilai z :"))
let x = parseInt(prompt("masukan nilai x :"))
let y = parseInt(prompt("masukan nilai y :"))

let terbesar = Math.max(x, y, z);
let terkecil = Math.min(x, y, z);

console.log("nilai terbesar =", terbesar);
console.log("nilai terkecil =", terkecil);

