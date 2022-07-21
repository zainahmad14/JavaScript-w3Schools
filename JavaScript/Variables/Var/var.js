// var can be re declared

var num = 5;
console.log(num);

var num = 10;
console.log(num);

// value of var can also be changed

var num1 = 15;
console.log(num1);

num1 = 20;
console.log(num1);

// value of var does not have block scope
// i.e val declared insilde block scope can be accessed outside block scope

{
    var num2 = 20;
    console.log(num2);
}

console.log(num2);