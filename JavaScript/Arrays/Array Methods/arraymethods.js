const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits);

// shift()
// removes the first element
// and shifts all other elements
// to lower index

fruits.shift();

console.log(fruits);

// unshift()
// inserts element at the beginning
// and shift all other elements
// to higher index

fruits.unshift('Banana');

console.log(fruits);

// concat()
// this merge arrays

let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9 ,10];

num1 = num1.concat(num2);

console.log(num1);

num1 = num1.concat(num1, num2);

console.log(num1);

// splice() 
// add new elements in array
// e.g splice(2, 0, 'Lemon', 'Kiwi')
// first parameter defines position
// where new elements should be added
// second parameter defines how many
// elements should be removed

console.log(fruits);

fruits.splice(2, 0, 'Lemon', 'Kiwi');

console.log(fruits);

fruits.splice(2, 2);

console.log(fruits);