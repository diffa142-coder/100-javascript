const prompt = require('prompt-sync')({ sigint: true });

let huruf = prompt("Masukkan satu huruf: ");

if (huruf.length === 1 && /^[a-zA-Z]$/.test(huruf)) {
    if ("aiueoAIUEO".includes(huruf)) {
        console.log("Huruf vokal");
    } else {
        console.log("Huruf konsonan");
    }
} else {
    console.log("Bukan berupa huruf");
}