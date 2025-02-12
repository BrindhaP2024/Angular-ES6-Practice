// array
let arr1:number[] = [2,4,5,7,8];
console.log(arr1);

let arr2:Array<number>=[3,5,6,8,94,4];
console.log(arr2);

let str:String[] = ["Angular","Expressjs","MongoDB"];
console.log(str);

let strEmpty:string[]=[];
console.log(strEmpty);

strEmpty[1]="Node.js";
console.log(strEmpty);

strEmpty.push('Typescript');
// console.log(strEmpty); we cant push other datatype values 

let Store: (number | string)[] ;
Store = [34,'d'];
console.log(Store);

// tuple - we cant push values in tuple

let tupleExample :[number,string];

tupleExample:[1000,"House"];

console.log(tupleExample);
// enum 
// number -initializes the value from 0
enum stC {
 NotFound = 404,
 Success = 200,
 Accepted=202,
 BadRequest=400
} 
console.log(stC);
// string

enum Dir{
    right="go right",
    left="go left",
    top = "top",
    bottom ="go to the bottom"
}
console.log(Dir);

// object type with interface

interface User1 {
    name: string;
    age: number;
    isActive: boolean;
  }
  
  const user1: User1 = {
    name: 'Brindha',
    age: 25,
    isActive: true
  };
console.log(user1.name);
console.log(user1);
// 
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property -?
    display(): void;
  }
  
  const product: Product = {
    id: 1,
    name: 'Laptop',
    price: 65000,
    display() {
      console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
  };
  
  product.display(); 

// type alies - used for creating code reusability and 

type aliasName = string | number;
let std :aliasName
let std1:aliasName;

std = 'One'
std1=2323;

console.log(std);

type Greet = (name: string) => string;

const welcome: Greet = (name: string) => `Hello, ${name}!`;

console.log(welcome('Brindha')); 

// string literal - a string literal type is a type that represents a specific string value. 
// String literals can be used to create types that can only have a particular set of string values, making your code more type-safe and expressive.
type Direction = 'north' | 'south' | 'east' | 'west';

let travelDirection: Direction;

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

let someValue1: unknown = "Hello";

let strLength: number = (<string>someValue1).length;

console.log(strLength); 

let valSample:unknown = "Learning typescript";
let strLength1:string = "(<string>valSample).toLowerCase";
console.log(strLength1);





