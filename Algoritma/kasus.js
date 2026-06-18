const prompt = require('prompt-sync')({ sigint: true });

let x = parseInt(prompt("Masukkan nilai x: "));
let y = parseInt(prompt("Masukkan nilai y: "));

if (x > 0 && y > 0) {
    console.log("Titik berada di Kuadran I");
}

else if (x < 0 && y > 0) {
    console.log("Titik berada di Kuadran II");
}

else if (x < 0 && y < 0) {
    console.log("Titik berada di Kuadran III");
}

else if (x > 0 && y < 0) {
    console.log("Titik berada di Kuadran IV");
}

else {
    console.log("Titik tidak berada di kuadran");
}