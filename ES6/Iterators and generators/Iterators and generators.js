// The Loop Problem -simple example how loop works 

const myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log('Loop Problem:', myArray[i]);
}


// What are Iterators?
const iterator = myArray[Symbol.iterator]();
console.log('Iterators:');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// What Are Generators?
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numberGenerator();
console.log('Generators:');
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Iterables and for-of
console.log('Iterables and for-of:');
for (const value of myArray) {
    console.log(value);
}

// Built-in Iterators
const myString = 'hello';
const strIterator = myString[Symbol.iterator]();
console.log('Built-in Iterators:');
console.log(strIterator.next());
console.log(strIterator.next());

const mySet = new Set([1, 2, 3]);
const setIterator = mySet[Symbol.iterator]();
console.log(setIterator.next());
console.log(setIterator.next());

// The Spread Operator and Non-Array Iterables
const spreadSet = new Set([1, 2, 3]);
const spreadArray = [...spreadSet];
console.log('Spread Operator and Non-Array Iterables:', spreadArray);
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...spreadSet));

// Advanced Iterator Functionality
const customIterable = {
    *[Symbol.iterator]() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
};
console.log('Advanced Iterator Functionality:');
for (const value of customIterable) {
    console.log(value);
}

// Asynchronous Task Running
function* asyncGenerator() {
    yield new Promise(resolve => setTimeout(() => resolve('First Promise'), 1000));
    yield new Promise(resolve => setTimeout(() => resolve('Second Promise'), 1000));
}
const asyncGen = asyncGenerator();
asyncGen.next().value.then(console.log);
asyncGen.next().value.then(console.log);
