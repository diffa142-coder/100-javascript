const prompt = require('prompt-sync')({ sigint: true });

let kode = parseInt(prompt("masukan sebuah angka : "));

if (kode === 78821) {
    console.log("You areauthenticated")
}

else {
    console.log("You have no access")
}