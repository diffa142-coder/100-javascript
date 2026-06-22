let huruf = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < 5; i++) {
    let baris = '';
    for (let j = 0; j < 5; j++) {
        baris += huruf[i] + ' ';
    }
    console.log(baris);
}