// array
var arr1 = [2, 4, 5, 7, 8];
console.log(arr1);
var arr2 = [3, 5, 6, 8, 94, 4];
console.log(arr2);
var str = ["Angular", "Expressjs", "MongoDB"];
console.log(str);
var strEmpty = [];
console.log(strEmpty);
strEmpty[1] = "Node.js";
console.log(strEmpty);
strEmpty.push('Typescript');
// console.log(strEmpty); we cant push other datatype values 
var Store;
Store = [34, 'd'];
console.log(Store);
// tuple - we cant push values in tuple
var tupleExample;
tupleExample: [1000, "House"];
console.log(tupleExample);
// enum 
// number -initializes the value from 0
var stC;
(function (stC) {
    stC[stC["NotFound"] = 404] = "NotFound";
    stC[stC["Success"] = 200] = "Success";
    stC[stC["Accepted"] = 202] = "Accepted";
    stC[stC["BadRequest"] = 400] = "BadRequest";
})(stC || (stC = {}));
console.log(stC);
// string
var Dir;
(function (Dir) {
    Dir["right"] = "go right";
    Dir["left"] = "go left";
    Dir["top"] = "top";
    Dir["bottom"] = "go to the bottom";
})(Dir || (Dir = {}));
console.log(Dir);
var user1 = {
    name: 'Brindha',
    age: 25,
    isActive: true
};
console.log(user1.name);
console.log(user1);
var product = {
    id: 1,
    name: 'Laptop',
    price: 65000,
    display: function () {
        console.log("Product: ".concat(this.name, ", Price: ").concat(this.price));
    }
};
product.display();
var std;
var std1;
std = 'One';
std1 = 2323;
console.log(std);
var welcome = function (name) { return "Hello, ".concat(name, "!"); };
console.log(welcome('Brindha'));
var travelDirection;
travelDirection = 'north'; // Valid assignment
travelDirection = 'south'; // Valid assignment
// travelDirection = 'up';    // Invalid assignment - TypeScript will raise an error
// Type assertion in TypeScript is a way to tell the compiler to treat a value as a specific type. It allows you to override the inferred type of a variable, giving you more control over type checking. Type assertions are purely a compile-time feature and have no impact on the runtime behavior of your code. 
console.log(travelDirection);
// There are two syntaxes for type assertion in TypeScript: using the as keyword and using angle brackets
// Assuming there is an element with id 'myElement' in your HTML
// let myElement = document.getElementById('myElement');
// // Type assertion to tell TypeScript that 'myElement' is an HTMLInputElement
// let inputElement = myElement as HTMLInputElement;
// inputElement.value = "New Value"; // Now TypeScript knows that 'inputElement' has a 'value' property
// Use Cases: Useful when working with DOM elements, when you need to inform the compiler about the specific type, or when working with interfaces.
var someValue1 = "Hello";
var strLength = someValue1.length;
console.log(strLength);
var valSample = "Learning typescript";
var strLength1 = "(<string>valSample).toLowerCase";
console.log(strLength1);
