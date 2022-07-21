const cars = ['Suzuki', 'Toyota', 'Honda'];

let i = 0;

let text = '';

// continue
// continue statement jumps over one 
// iteration in the loop

for (i; i < 4; i++) {
    if (i == 3) {
        continue;
    }
    text += cars[i] + ' ';
}

console.log(text);