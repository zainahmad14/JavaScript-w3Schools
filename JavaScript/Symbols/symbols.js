// Symbol()
// It is a primitive datatype just like
// NUmber, String or Boolean
// It represents a unique 'hidden' identifier
// that no other code can actually access
// For instance, if different coders want to add
// a person.id property to a person object belonging
// to a third party code, they could mix each others
// values

const person = {
    fname: 'John',
    lname: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

let id = Symbol('id');

console.log(id);

person[id] = 140353;

console.log(person[id]);

console.log(person.id);

// Now person[id] = 140353
// But person.id is still undefined