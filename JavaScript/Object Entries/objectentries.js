// entries()
// This creates an array iterator and 
// then iterate over the key/value pairs

const fruits = [
    'Apple', 
    'Orange',
    'Banana',
    'Peach'
];

const entries = fruits.entries();

for (let x of entries) {
    console.log(x);
}