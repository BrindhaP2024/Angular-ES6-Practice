const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(1, 2, 3, 4, 5);

// Creating an Array of a Specified Length
const array3 = new Array(5); 

console.log('Array Literals:', array1);
console.log('Array Constructor:', array2);
console.log('Array with Specified Length:', array3);

const numbers = [1, 2, 3, 4, 5];

// Array.prototype.find()
const found = numbers.find(num => num > 3);
console.log('Find:', found);

// Array.prototype.findIndex()
const index = numbers.findIndex(num => num > 3);
console.log('FindIndex:', index);

// Array.prototype.includes()
const includes = numbers.includes(3);
console.log('Includes:', includes);

// Array.prototype.entries()
const entries = numbers.entries();
for (const [index, value] of entries) {
    console.log('Entries:', index, value);
}

// Array.prototype.keys()
const keys = numbers.keys();
for (const key of keys) {
    console.log('Keys:', key);
}

// Array.prototype.values()
const values = numbers.values();
for (const value of values) {
    console.log('Values:', value);
}

// Typed Arrays

// Creating a Typed Array
const buffer = new ArrayBuffer(8);
const int32View = new Int32Array(buffer); 

int32View[0] = 42;
int32View[1] = 84;

console.log('Typed Array:', int32View);

const regularArray = [1, 2, 3];
const typedArray = new Uint8Array([1, 2, 3]);

regularArray.forEach(value => console.log('Regular Array Value:', value));
typedArray.forEach(value => console.log('Typed Array Value:', value));

console.log('Regular Array Slice:', regularArray.slice(1));
console.log('Typed Array Slice:', typedArray.slice(1));

const regularArray2 = [1, 'two', 3.0];
const typedArray2 = new Uint8Array([1, 2, 3]);

// Regular arrays can store mixed data types
console.log('Regular Array:', regularArray2);

// Typed arrays store fixed-size binary data
try {
    typedArray2[0] = 'two'; 
} catch (e) {
    console.error('Typed Array Error:', e.message);
}

// Typed arrays have a fixed length
console.log('Typed Array Length:', typedArray2.length);
try {
    typedArray2.length = 10; 
} catch (e) {
    console.error('Typed Array Length Error:', e.message);
}
