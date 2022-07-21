const fruits = new Map();

console.log(fruits);

fruits.set('apple');

console.log(fruits);

fruits.set('apple', 100);

console.log(fruits);

fruits.set('apple', 500);

console.log(fruits);

fruits.set('apple');

console.log(fruits);

fruits.set('banana');

console.log(fruits);

console.log();

for (const x of fruits.entries()) {
    console.log(x);
}

console.log();

for (const x of fruits) {
    console.log(x);
}