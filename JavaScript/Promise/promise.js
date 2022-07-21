// Promise()
// this is a object that links
// 'Producing Code' and 'Consuming Code'
// 'Producing Code' can take some time and 
// 'Consuming Code' must wait for the result

// const myPromise = new Promise(function(myResolve, myReject) {
// 'Producing Code' (May take some time)
//  
//  myResolve(); // when successful
//  myReject(); // when error
//
//});

// 'Consuming Code' (Must wait for a fulfilled Promise)
// myPromise.then(
//  function(value) { code if successful},
//  function(error) { code if some error}
//);

function runSuccessful() {
    console.log('Successful');
}

function error() {
    console.log('Error');
}

let myPromise = new Promise(function(runSuccessful, error) {
    let x = 10;

    if (x === 10) {
        runSuccessful();
    } else {
        error();
    }
});

myPromise.then(
    function() {
        runSuccessful();
    },
    function() {
        error()
    }
);