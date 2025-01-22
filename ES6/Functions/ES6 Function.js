function makeRequest(url, timeout, callback) {
    timeout = (typeof timeout !== 'undefined') ? timeout : 2000;
    callback = (typeof callback !== 'undefined') ? callback : function() {};

    console.log(`URL: ${url}`);
    console.log(`Timeout: ${timeout}`);
    console.log(`Callback: ${callback}`);
}

// Example usage
makeRequest('https://google.com', 0);

// Strict mode 

'use strict';

function mixArgs(first, second = 'b') {
    console.log(first === arguments[0]); 
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    console.log(first === arguments[0]); 
    console.log(second === arguments[1]);
}

mixArgs("a");

// es6 with rest parameters

// ES6 approach using rest parameters
function multiplyES6(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

console.log(multiplyES6(2, 3));
