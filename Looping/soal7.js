let hasil = '';
let total = 0;
for (let i = 1; i <= 5; i += 2) {
    hasil += i;
    total += i;
    if (i < 5) {
        hasil += ' + ';
    }
}
console.log(`${hasil} = ${total}`);