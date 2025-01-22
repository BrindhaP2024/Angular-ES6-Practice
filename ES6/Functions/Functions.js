// 1. The Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log('Spread Operator:', arr2);

function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log('Spread Operator in function:', sum(...numbers));

// 2. ECMAScript 6’s `name` Property
function sampleFunction() {}
const anotherFunction = function() {};
const arrowFunction = () => {};

console.log('Function names:');
console.log(sampleFunction.name);
console.log(anotherFunction.name);
console.log(arrowFunction.name);

// 3. Clarifying the Dual Purpose of Functions
function Person(name) {
    this.name = name;
}

const john = new Person('John');
console.log('Constructor Function:', john.name);

Person.call({}, 'Jane');

// 4. Block-Level Functions
{
    function blockScopedFunction() {
        return 'I am block scoped!';
    }
    console.log('Block-Level Function:', blockScopedFunction());
}

// 5. Arrow Functions
const add = (a, b) => a + b;
console.log('Arrow Function:', add(3, 4));

const numArray = [1, 2, 3, 4];
const doubled = numArray.map(n => n * 2);
console.log('Arrow Function with map:', doubled);

// 6. Tail Call Optimization
function factorial(n, acc = 1) {
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}
console.log('Tail Call Optimization:', factorial(5));

// 7. Functions with Default Parameter Values
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet();
greet('Alice');

// 8. Working with Unnamed Parameters (Rest Parameters)
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log('Rest Parameters:', sumAll(1, 2, 3, 4));

// 9. Increased Capabilities of the Function Constructor
const multiply = new Function('a', 'b', 'return a * b');
console.log('Function Constructor:', multiply(2, 3));

// Additional Example for Default Parameter Expressions and TDZ
function example(y = 2, x = y) {
    return [x, y];
}

console.log('Default Parameter Expressions and TDZ:', example());

// META - new.target
function Person(name) {
    if (!new.target) {
        throw new Error('You must use new with Person');
    }
    this.name = name;
}

try {
    const john = new Person('John');
    console.log(BRINDHA.name);
} catch (e) {
    console.error(e.message);
}

try {
    const jane = Person('Jane'); 
} catch (e) {
    console.error(e.message);
}
