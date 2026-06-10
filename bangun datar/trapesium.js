const prompt =require(`prompt-sync`)({sigint:true})

let a =parseInt(prompt('masukan a :'));
let b =parseInt(prompt('masukan b :'));
let tinggi =parseInt(prompt('masukan tinggi :'));
let c =parseInt(prompt('masukan c :'));
let d =parseInt(prompt('masukan d :'));

let luas = 1/2 * (a +    b) * tinggi;
let keliling = a + b + c + d;

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling :${keliling.toFixed(2)}cm`);