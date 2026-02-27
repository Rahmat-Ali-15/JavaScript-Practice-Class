let data = [5, 7, 10, 12, 15];
let newEl = 30;
let position = 2;
for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
        data[i + 1] = data[i];

        if (i === position) {
            data[i] = newEl;
        }
    }
}
console.log(data);