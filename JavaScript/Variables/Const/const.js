// value of const cannot be changed

const num = 10;
console.log(num);

// num  = 15;

// const does not allow redeclaration

const num1 = 20;
console.log(num1);

//const num1 = 30;

// const does have block scope

{
    const num3 = 30;
    console.log(num3);
}

// console.log(num3);

// if we have declared a const object
// then we can change the elements
// but we cannot reassign the object

const name = ['zain', 'ahmad', 'rizwan'];
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);

name.push('arshad');
console.log(name[3]);

// name = ['ali', 'pasha'];
// console.log(name[0]);
// console.log(name[1]);