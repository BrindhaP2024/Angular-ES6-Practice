// Arithmetic Operators
let a: number = 10;
let b: number = 3;

console.log('Arithmetic Operators:');
console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log(`a ** b = ${a ** b}`);

// Assignment Operators
let c1: number = 5;

console.log('\nAssignment Operators:');
c1 += 5;
console.log(`c += 5 -> c = ${c1}`);
c1 -= 3;
console.log(`c -= 3 -> c = ${c1}`);
c1 *= 2;
console.log(`c *= 2 -> c = ${c1}`);
c1 /= 2;
console.log(`c /= 2 -> c = ${c1}`);
c1 %= 3;
console.log(`c %= 3 -> c = ${c1}`);

// Comparison Operators
console.log('\nComparison Operators:');
console.log(`a == b -> ${a == b}`);
console.log(`a != b -> ${a != b}`);
console.log(`a === b -> ${a === b}`);
console.log(`a !== b -> ${a !== b}`);
console.log(`a > b -> ${a > b}`);
console.log(`a < b -> ${a < b}`);
console.log(`a >= b -> ${a >= b}`);
console.log(`a <= b -> ${a <= b}`);

// Logical Operators
let isTrue: boolean = true;
let isFalse: boolean = false;

console.log('\nLogical Operators:');
console.log(`isTrue && isFalse -> ${isTrue && isFalse}`);
console.log(`isTrue || isFalse -> ${isTrue || isFalse}`);
console.log(`!isTrue -> ${!isTrue}`);

// Bitwise Operators
console.log('\nBitwise Operators:');
console.log(`a & b = ${a & b}`);
console.log(`a | b = ${a | b}`);
console.log(`a ^ b = ${a ^ b}`);
console.log(`~a = ${~a}`);
console.log(`a << b = ${a << b}`);
console.log(`a >> b = ${a >> b}`);
console.log(`a >>> b = ${a >>> b}`);

// String Operators
let str11: string = 'Hello';
let str12: string = 'World';

console.log('\nString Operators:');
console.log(`str1 + ' ' + str2 = ${str11 + ' ' + str12}`);

// Type Operators
console.log('\nType Operators:');
console.log(`typeof a = ${typeof a}`);
console.log(`instanceof str11 = ${new String(str11) instanceof String}`); // Corrected this line

// Unary Operators
let x: number = 5;

console.log('\nUnary Operators:');
console.log(`x++ = ${x++}`);
console.log(`++x = ${++x}`);
console.log(`x-- = ${x--}`);
console.log(`--x = ${--x}`);
console.log(`-x = ${-x}`);

// Conditional (Ternary) Operator
let age1: number = 18;
let canVote: string = (age1 >= 18) ? 'Yes' : 'No';

console.log('\nConditional (Ternary) Operator:');
console.log(`Can vote: ${canVote}`);

// Nullish Coalescing Operator
let userName: string | null = null;
let defaultName: string = userName ?? 'Guest';

console.log('\nNullish Coalescing Operator:');
console.log(`User name: ${defaultName}`);

// Optional Chaining Operator
let userDetails = {
  name: 'Brindha',
  address: {
    city: 'Chennai'
  }
};

console.log('\nOptional Chaining Operator:');
console.log(`User city: ${userDetails.address?.city}`);
// console.log(`User country: ${userDetails.address?.country}`); // Commented out as 'country' property does not exist

// Comma Operator
let n11: number, n12: number;
let result = (a = 1, b = 2, n11 = 3, n12 = a + b);

console.log('\nComma Operator:');
console.log(`Result: ${result}`);
// type of
let num1: number = 42;
let str111: string = 'Hello, TypeScript';
let isValidOne: boolean = true;

console.log(`typeof num = ${typeof num1}`);
console.log(`typeof str = ${typeof str111}`); 
console.log(`typeof isTrue = ${typeof isValidOne}`); 
console.log(`typeof {} = ${typeof {}}`); 
console.log(`typeof function(){} = ${typeof function(){}}`); 

// instance of 
class Person{
    getName(): any {
        throw new Error("Method not implemented.");
    }
    getDetails(): any {
        throw new Error("Method not implemented.");
    }
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  let person2= new Person('Brindha');
  
  console.log(person2 instanceof Person); 
  console.log(person2 instanceof Object); 

// delete
  
let book = { title: 'TypeScript Handbook', author: 'Microsoft' };

console.log(book);

delete book.author;

console.log(book); 


// in
let car = { make: 'Toyota', model: 'Camry' };

console.log('make' in car); 
console.log('color' in car); 

let arr = [1, 2, 3];
console.log(0 in arr);
console.log(3 in arr); 

