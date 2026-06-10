const prompt =require('prompt-sync')({sigint:true});

let huruf = prompt("masukan satu huruf: ");

if (huruf.let ===  1 && /^[a-zA-Z]&/.test(huruf)) {
    if ("aiueoAUIEO".includes(huruf)){
        console.log("huruf vokal");
    }
    else {
        console.log("huruf konsonan")
    }
}
else {
    console.log("bukan berupa huruf")
}