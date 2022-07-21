// try statement
// this defines a code block 
// to run (to try)

// catch statement
// this defines a code block to 
// handle any error

// finally statement
// this defines a code block to 
// run regardless of the result

// throw statement
// this defines a custom error

// try {
//    
// }
// catch(err) {
//    
// }

const num = 11;

try {
    if (num < 10) {
        console.log('num is less than 10');
        return;
    }
    else if (num > 10) {
        console.log('num is greater than 10');
        return;
    }
}
catch(err) {
    console.log(err.name);
    return;
}
finally {
    console.log('Bye!');
    return;
}