// y is 10 if not passed
// if passed then y will be equal to passed value

function myFunction(x, y = 10) {
    return x + y;
}

console.log(myFunction(5));

console.log(myFunction(5, 15));