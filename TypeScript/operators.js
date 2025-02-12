var _a;
// Arithmetic Operators
var a = 10;
var b = 3;
console.log('Arithmetic Operators:');
console.log("a + b = ".concat(a + b));
console.log("a - b = ".concat(a - b));
console.log("a * b = ".concat(a * b));
console.log("a / b = ".concat(a / b));
console.log("a % b = ".concat(a % b));
console.log("a ** b = ".concat(Math.pow(a, b)));
// Assignment Operators
var c1 = 5;
console.log('\nAssignment Operators:');
c1 += 5;
console.log("c += 5 -> c = ".concat(c1));
c1 -= 3;
console.log("c -= 3 -> c = ".concat(c1));
c1 *= 2;
console.log("c *= 2 -> c = ".concat(c1));
c1 /= 2;
console.log("c /= 2 -> c = ".concat(c1));
c1 %= 3;
console.log("c %= 3 -> c = ".concat(c1));
// Comparison Operators
console.log('\nComparison Operators:');
console.log("a == b -> ".concat(a == b));
console.log("a != b -> ".concat(a != b));
console.log("a === b -> ".concat(a === b));
console.log("a !== b -> ".concat(a !== b));
console.log("a > b -> ".concat(a > b));
console.log("a < b -> ".concat(a < b));
console.log("a >= b -> ".concat(a >= b));
console.log("a <= b -> ".concat(a <= b));
// Logical Operators
var isTrue = true;
var isFalse = false;
console.log('\nLogical Operators:');
console.log("isTrue && isFalse -> ".concat(isTrue && isFalse));
console.log("isTrue || isFalse -> ".concat(isTrue || isFalse));
console.log("!isTrue -> ".concat(!isTrue));
// Bitwise Operators
console.log('\nBitwise Operators:');
console.log("a & b = ".concat(a & b));
console.log("a | b = ".concat(a | b));
console.log("a ^ b = ".concat(a ^ b));
console.log("~a = ".concat(~a));
console.log("a << b = ".concat(a << b));
console.log("a >> b = ".concat(a >> b));
console.log("a >>> b = ".concat(a >>> b));
// String Operators
var str11 = 'Hello';
var str12 = 'World';
console.log('\nString Operators:');
console.log("str1 + ' ' + str2 = ".concat(str11 + ' ' + str12));
// Type Operators
console.log('\nType Operators:');
console.log("typeof a = ".concat(typeof a));
console.log("instanceof str11 = ".concat(new String(str11) instanceof String)); // Corrected this line
// Unary Operators
var x = 5;
console.log('\nUnary Operators:');
console.log("x++ = ".concat(x++));
console.log("++x = ".concat(++x));
console.log("x-- = ".concat(x--));
console.log("--x = ".concat(--x));
console.log("-x = ".concat(-x));
// Conditional (Ternary) Operator
var age1 = 18;
var canVote = (age1 >= 18) ? 'Yes' : 'No';
console.log('\nConditional (Ternary) Operator:');
console.log("Can vote: ".concat(canVote));
// Nullish Coalescing Operator
var userName = null;
var defaultName = userName !== null && userName !== void 0 ? userName : 'Guest';
console.log('\nNullish Coalescing Operator:');
console.log("User name: ".concat(defaultName));
// Optional Chaining Operator
var userDetails = {
    name: 'Brindha',
    address: {
        city: 'Chennai'
    }
};
console.log('\nOptional Chaining Operator:');
console.log("User city: ".concat((_a = userDetails.address) === null || _a === void 0 ? void 0 : _a.city));
// console.log(`User country: ${userDetails.address?.country}`); // Commented out as 'country' property does not exist
// Comma Operator
var n11, n12;
var result = (a = 1, b = 2, n11 = 3, n12 = a + b);
console.log('\nComma Operator:');
console.log("Result: ".concat(result));
// type of
var num1 = 42;
var str111 = 'Hello, TypeScript';
var isValidOne = true;
console.log("typeof num = ".concat(typeof num1));
console.log("typeof str = ".concat(typeof str111));
console.log("typeof isTrue = ".concat(typeof isValidOne));
console.log("typeof {} = ".concat(typeof {}));
console.log("typeof function(){} = ".concat(typeof function () { }));
// instance of 
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person2 = new Person('Brindha');
console.log(person2 instanceof Person);
console.log(person2 instanceof Object);
// delete
var book = { title: 'TypeScript Handbook', author: 'Microsoft' };
console.log(book);
delete book.author;
console.log(book);
// in
var car = { make: 'Toyota', model: 'Camry' };
console.log('make' in car);
console.log('color' in car);
var arr = [1, 2, 3];
console.log(0 in arr);
console.log(3 in arr);
