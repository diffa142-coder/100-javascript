const prompt =require('prompt-sync')({sigint:true});

let Hargamakanan = parseInt(prompt('masukan harga makanan :'));

let pajak = Hargamakanan * 10 / 100;
let fee = Hargamakanan * 5 / 100;

let hargaBayar = Hargamakanan + pajak + fee;

console.log("/n=== HASIL PERHITUNGAN ===");
console.log("Harga makanan : " + Hargamakanan);
console.log("Pajak : " + pajak);
console.log("Fee : " + fee);
console.log("Harga bayar : " + hargaBayar);