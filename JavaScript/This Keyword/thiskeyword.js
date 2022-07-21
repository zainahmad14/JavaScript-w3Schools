// this keyword
// this refers to an object
// this also refers to the element that recieved the event

// if we donot use this is function() then we will cause error

const person = {
    fname: 'zain',
    lname: 'ahmad',
    fullname: function() {
        return this.fname + ' ' + this.lname;
    }
};

console.log(person.fullname());
