const employees = [
    {
    firstname: 'zain',
    lastname: 'ahmad'
    }, {
    firstname: 'ali',
    lastname: 'abdullah'
    }
];

//let text = toString(employees);

const obj = JSON.stringify(employees);

console.log(obj);

const obj2 = JSON.parse(obj);

console.log(obj2);

console.log(obj2[0].firstname);
