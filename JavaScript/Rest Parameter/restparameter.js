// Rest Parameter -> (...)
// This allows a function to treat an indefinite 
// number of arguments as an array

function sum(...args) {
    let sum = 0;
    for (arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sum(0));

console.log(sum(5));

console.log(sum(5, 10, 15, 20));