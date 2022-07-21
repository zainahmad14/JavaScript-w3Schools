const person = {
    first_name: 'zain',
    last_name: 'ahmad',
    id: '1',
    fullname: function() {
        return this.first_name + this.last_name;
    }
}

first_name = person.first_name;
console.log(first_name);

last_name = person.last_name;
console.log(last_name);

// if we access function without using 
// paranthesis then it will return
// function decalaration

fullname = person.fullname;
console.log(fullname);

// if we access function with using
// paranthesis then it will return
// the value we get from function 

fullname = person.fullname();
console.log(fullname);