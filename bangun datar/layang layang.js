const prompt =require('prompt-sync')({sigint:true});

let d1 =parseInt(prompt('masukan nilai d1 :'));
let d2 =parseInt(prompt('masukan nilai d2 :'));
let p =parseInt(prompt('masukan nilai p :'));
let q =parseInt(prompt('masukan nilai q :'));

let luas =1/2 * d1 * d2;
let keliling = 2 * (p + q);

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling :${keliling.toFixed(2)}cm`);