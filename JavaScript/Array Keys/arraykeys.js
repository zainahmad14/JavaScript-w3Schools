// keys()
// This method returns an array iterator object
// with the keys of an array

const fruits = [
    'Apple', 
    'Banana', 
    'Orange'
];

const keys = fruits.keys();

console.log(keys);

let text = '';

for (let x of keys) {
    text += x + '\n';
}

console.log(text);