// 5 in bits is 0101

let num1 = 5;

// 1 in bits is 0001

let num2 = 1;

// & AND
// sets each bit to 1 if both 
// bits are 1

console.log(num1 & num2);

// | OR
// sets each bit to 1 if one of 
// two bits is 1

console.log(num1 | num2);

// ^ XOR
// sets each bit to 1 if only one 
// of two bits is 1

console.log(num1 ^ num2);

// ~ NOT
// inverts all the bits

console.log(~num1);

// << Zero fill left shift
// shifts left by pushing zeros in
// from the right and let the 
// leftmost bits fall off
// e.g we push num2 zeros from right 
// and remove num2 elements from left

console.log(num1 << num2);

// >> Signed right shift
// shifts right by pushing copies of 
// the leftmost bit in from the left
// and let the rightmost bits fall off
// e.g we push num2 elements to the left
// which are copies of left bits to 
// and remove num2 elements from the 
// right bit 

console.log(num1 >> num2);

// >>> Zero fill right shift
// shifts right by pushing zeros in 
// from the left and let the 
// rightmost bit falls off
// e.g we push num2 zero in from the left
// and remove num2 elements from right

console.log(num1 >>> num2);