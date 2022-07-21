let str = 'Apple, Banana, Kiwi';

console.log(str);

let slice = str.slice(7, 13);
console.log(slice);

let substring = str.substring(7);
console.log(substring);

// replace()
// it doesnot change the string it is called on
// returns a new string
// replaces only the first match

let replace = str.replace('Banana', 'Orange');
console.log(replace);
