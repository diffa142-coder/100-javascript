const prompt =require('prompt-sync')({sigint:true});

let haragabarang = parseInt(prompt("masukan haraga barang"));

let diskon = 0;
let totalbayar;

if (haragabarang >= 200000){
    diskon = haragabarang * 7.5 / 100;
}

totalbayar = haragabarang - diskon;

console.log("Harga Barang : " + hargaBarang);
console.log("Diskon : " + diskon);
console.log("Total Bayar : " + totalBayar);

