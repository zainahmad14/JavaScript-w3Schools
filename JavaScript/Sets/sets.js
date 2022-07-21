const letters = new Set([
    'a',
    'b',
    'c',
    'd',
    'e'
]);

console.log(letters);

console.log();

function myFunction(item, index, arr) {
    arr[index] = item + item;
    console.log(arr[index]);
}

letters.forEach(myFunction);