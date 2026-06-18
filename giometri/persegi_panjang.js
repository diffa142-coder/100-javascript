const prompt =require('prompt-sync')({sigint:true});

let p = parseInt(prompt(`masukan nilai p:`));
let l = parseInt(prompt("masukan nilai l:"));

let luas = p * l;
let keliling = 2  * (p + l);

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling :${keliling.toFixed(2)}cm`);