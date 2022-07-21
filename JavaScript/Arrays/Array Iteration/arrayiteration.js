// forEach()
// this takes three arguments
// the item value
// the item index
// the array itself
// e.g myFunction(value, index, arrays)

// for (let i = 0; i < 10; i++) {
//        
// }


function myFuntion(value, index, array) {
    console.log(value);
} 

const numbers = [45, 4, 9, 16, 25];

console.log(numbers);

// forEach()
// this calls a function once
// for each array element

numbers.forEach(myFuntion);

console.log();

// map()
// this creates a new array by performing
// a function on each array element
// this does not execute the function for
// array elements without values
// this does not change the original array

const numbers1 = numbers.map(myFuntion);

console.log(numbers1);

function myFunction1(value) {
    return value > 10;
}

// filter()
// this creates a new array with array
// elements that passes a test

console.log();

const numbers2 = [2, 15, 42, 7, 11];

const over10 = numbers2.filter(myFunction1);

console.log(over10);