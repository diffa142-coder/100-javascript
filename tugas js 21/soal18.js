const prompt = require('prompt-sync')({sigint:true});

let bilangan = parseInt(prompt("masukan bilangan bulat :"));

if (bilangan % 7 === 0) {
    console.log("bilanga tersebut berkelaipatan 7");
}

else {
    console.log("Anda belum beruntung");
}