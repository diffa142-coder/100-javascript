let hasil = '';
let total = 0;
for (let i = 2; i <= 10; i += 2) {
    hasil += i;
    total += i;
    if (i < 10) {
        hasil += ' + ';
    }
}
console.log(`${hasil} = ${total}`);