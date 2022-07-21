// let does not allow redeclaration

let num = 10;
console.log(num);

//let num = 20;

// value of let can be changed

let num1 = 20;
console.log(num1);

num1 = 30;
console.log(num1);

// let does have block scope
// i.e value of let declared inside block cannot be accessed outside block

{
    let num2 = 30;
    console.log(num2);
}

//console.log(num2);