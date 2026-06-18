const prompt = require('prompt-sync')({ sigint: true });

let t1 = prompt("Tanggal pertama (dd/mm/yy): ");
let t2 = prompt("Tanggal kedua (dd/mm/yy): ");

let [d1, m1, y1] = t1.split("/").map(Number);
let [d2, m2, y2] = t2.split("/").map(Number);
let total1 = y1 * 365 + m1 * 30 + d1;
let total2 = y2 * 365 + m2 * 30 + d2;
let selisih = Math.abs(total2 - total1);
let tahun = Math.floor(selisih / 365);
selisih %= 365;
let bulan = Math.floor(selisih / 30);
let hari = selisih % 30;

console.log("Selisih:");
console.log(tahun, "tahun");
console.log(bulan, "bulan");
console.log(hari, "hari");