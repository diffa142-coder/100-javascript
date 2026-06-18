const prompt =require('prompt-sync')({sigint:true});

let sisi_miring =parseInt(prompt('masukan sisi_miring :'))
let tinggi =parseInt(prompt('masukan tinggi :'))
let alas =parseInt(prompt('masukan alas :'))

let luas = alas * tinggi;
let keliling = 2 * (luas + sisi_miring)

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling :${keliling.toFixed(2)}cm`);