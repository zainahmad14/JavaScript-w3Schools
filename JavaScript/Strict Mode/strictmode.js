// 'use strict'
// if we use use strict then we must declare variables or function

// this will generate error because we have not declared variable

//'use strict';
// x = 10;

// this will also cause an error because x is not declared in function

// 'use strict';
// hello();

// function hello() {
//     x = 10;
//     console.log('hello + x');
// }

// this will not cause error because x is declared in function

'use strict';
hello();

function hello() {
    const x = 5;
    console.log('hello' + x);
}
