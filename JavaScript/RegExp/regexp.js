// /w3Schools/i is a regular expression
// w3Schools is a pattern (to be used in
// search)
// i is modifier (modifies the seach to be 
// case sensitive)
// i is optional part of regular 
// expression and allow us to perform
// case insensitive and global searchers


let text = 'Visit w3Schools';

console.log(text.search('w3Schools'));

console.log(text.search(/w3Schools/i));