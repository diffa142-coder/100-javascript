const prompt = require('prompt-sync')({sigint:true});

let PPLG1 = parseInt(prompt('masukan jumlah PPLG1 :'));
let PPLG2 = parseInt(prompt('masukan jumlah PPLG2 :'));
let PPLG3 = parseInt(prompt('masukan jumlah PPLG3 :'));
let TJKT1 = parseInt(prompt('masukan jumlah TJKT1 :'));
let TJKT2 = parseInt(prompt('masukan jumlah TJKT2 :'));

let total_siswa = PPLG1 + PPLG2 + PPLG3 + TJKT1 +TJKT2;

console.log("jumlah semuah total siswa adalah : " + total_siswa);