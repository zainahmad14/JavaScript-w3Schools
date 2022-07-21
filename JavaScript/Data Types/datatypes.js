let result = 0;

result = 'abc' + 'def';
console.log(result);

result = 14 + 20;
console.log(result);

// When adding a number and a string
// JavaScript treat the number as string

result = 14 + 'abc';
console.log(result);

// This will generate NaN -> Not a legal number

result = 14 - 'abc14';
console.log(result);

result = 14 + 14 + 'abc';
console.log(result);

result = 14 + 28.002;
console.log(result);