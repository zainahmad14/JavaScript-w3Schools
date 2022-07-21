const cars = ['Suzuki', 'Toyota', 'Honda'];

let i = 0;

let text = '';

// break
// break statement jumps out of a loop

for (i; i < 10; i++) {
    if (i >= 3) {
        break;
    }
    text += cars[i] + ' ';
}

console.log(text);