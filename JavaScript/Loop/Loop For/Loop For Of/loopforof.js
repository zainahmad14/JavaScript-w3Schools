const cars = ['Suzuki', 'Toyota', 'Honda'];

// for of
// for of statement loops through the 
// values of an iterable object

let text = '';

for (let x of cars) {
    text += x;
}

console.log(text);