// Funtion expression with default params here...

function computeTotal(price, tax = price * 0.1) {
    return price + tax;
}

console.log(computeTotal(100));
console.log(computeTotal(100, 15)); 

// temporal dead zone

function example(x = y, y = 2) {
    return [x, y];
}

console.log(example()); // ReferenceError: y is not defined


// to avoid the temporal dead zone 
function example(y = 2, x = y) {
    return [x, y];
}

console.log(example()); 
