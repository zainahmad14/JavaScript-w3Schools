const person = {
    fname: 'Zain',
    lname: 'Ahmad',
    age: 20
};

let text = '';

// for in
// for in statement loops through the
// properties of an object

for (let x in person) {
    text += person[x] + ' ';
}

console.log(text);