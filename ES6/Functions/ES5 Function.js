// function makeRequest(url, timeout, callback) {
//     timeout = timeout || 2000;
//     callback = callback || function() {};

//     // The rest of the function
//     console.log(`URL: ${url}`);
//     console.log(`Timeout: ${timeout}`);
//     console.log(`Callback: ${callback}`);
// }

// // Example usage
// makeRequest('https://nodejs.org/en/download');


// // es5 with typeof()

// function makeRequest(url, timeout, callback) {
//     timeout = (typeof timeout !== 'undefined') ? timeout : 2000;
//     callback = (typeof callback !== 'undefined') ? callback : function() {};

//     // The rest of the function
//     console.log(`URL: ${url}`);
//     console.log(`Timeout: ${timeout}`);
//     console.log(`Callback: ${callback}`);
// }

// makeRequest('https://nodejs.org/en/download',0);

// // Default Arguments that affects the arguments object

// // Non-strict mode

function mixArgs(first,second){
    {
        console.log(first === arguments[0]); 
        console.log(second === arguments[1]); 
        first = "c";
        second = "d";
        console.log(first === arguments[0]); 
        console.log(second === arguments[1]);
}
}
mixArgs("c","d");

// function with unnamed parameters.
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4));


