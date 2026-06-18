const prompt =require('prompt-sync')({sigint:true});

let d1 =parseInt(prompt('masukan nilai d1 :'));
let d2 =parseInt(prompt('masukan nilai d2 :'));
let s =parseInt(prompt('masukan nilai s :'));

let luas =1/2 * d1 * d2;
let keliling = 4 * s;

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling :${keliling.toFixed(2)}cm`);