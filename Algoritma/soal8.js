const prompt = require('prompt-sync')({ sigint: true });

let nilaiPixel = Number(prompt('masukan nilai hasil operasi pixel : '));

if (nilaiPixel > 255) {
    nilaiPixel = 255;
} else if (nilaiPixel < 0) {
    nilaiPixel = 0;
}

console.log(`nilai pixel setelah clipping: ${nilaiPixel}`);