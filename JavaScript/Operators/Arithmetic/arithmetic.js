const num1 = 5;
const num2 = 10;
let result = 0;


// Addition Operator

result = num1 + num2;
console.log(result);

// Subtraction Operator

result = num1 - num2;
console.log(result);

// Multiplication Operator

result = num1 * num2;
console.log(result);

// Division Operator

result = num1 / num2;
console.log(result);

// Exponentiation Operator

result = num1 ** num2;
console.log(result);

// Modulus Operator

result = num1 % num2;
console.log(result);

// Increment Operator

result = num1 + num2;
result++;
console.log(result);

// Decrement Operator

result = num1 + num2;
result--;
console.log(result);

// Operator Precedence
// Multiplication and Division has higher precedence
// than Addition and Subtraction

result = num1 + num2 * num1 / num2;
console.log(result);