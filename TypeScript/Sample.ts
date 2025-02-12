// Variables & Basic Types
let Name: string = "John Doe";
let age: number = 30;
let isActive: boolean = true;
let salary: any = 1000.50;

console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}, Salary: ${salary}`);

// Arrays and Tuples
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Orange"];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);

let person: [string, number] = ["Alice", 25];
console.log("Person Tuple:", person);

// Enums
enum Colors {
  R = 1,
  Green = 2,
  Blue = 3
}
let favoriteColor: Colors = Colors.Green;
console.log("Favorite Color:", favoriteColor);

// Functions
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// Optional Parameters in Functions
function introduce(name: string, age?: number): string {
  return age ? `${name} is ${age} years old` : `${name} is an unknown age`;
}

console.log(introduce("Alice"));
console.log(introduce("Bob", 32));

// Default Parameters
function greetWithDefault(name: string, age: number = 30): string {
  return `${name} is ${age} years old.`;
}

console.log(greetWithDefault("Charlie"));
console.log(greetWithDefault("David", 40));

// Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5));

// Type Aliases
type Point = { x: number, y: number };

let point: Point = { x: 10, y: 20 };
console.log("Point:", point);

// Union Types
let identifier: string | number;
identifier = "123";
console.log("Identifier as string:", identifier);
identifier = 123;
console.log("Identifier as number:", identifier);

// Interfaces
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// let users: Person = {
//   name1: "John",
//   age: 25,
//   greet: () => {
//     console.log(`Hello, my name is ${user.name1}`);
//   }
// };

// user.greet();

// Classes
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark() {
    throw new Error("Method not implemented.");
  }
  constructor(name: string) {
    super(name);
  }

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog("Rex");
dog.speak();

// Access Modifiers
class PersonWithAccess {
  private id: number;
  protected name: string;
  public age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  public showInfo(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
  }
}

let personWithAccess = new PersonWithAccess(101, "Alice", 28);
personWithAccess.showInfo();

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity("Hello, TypeScript!");  // T is inferred to be string
let output2 = identity(42);  // T is inferred to be number

console.log(output1);  // "Hello, TypeScript!"
console.log(output2);  // 42

// Generic Class
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let stringBox = new Box<string>("Boxed String");
console.log(stringBox.getValue());  // "Boxed String"

let numberBox = new Box<number>(100);
console.log(numberBox.getValue());  // 100

// Modules in TypeScript
/*
import { add } from './utils';  // Importing add function from another module
console.log("Sum from module:", add(10, 20));  // Output: 30
*/

// Decorators (Experimental feature)
function logClass(target: Function) {
  console.log(`Class ${target.name} is being created!`);
}

@logClass
class MyClass {
  constructor() {
    console.log("MyClass instance created!");
  }
}

let myClassInstance = new MyClass();

// Functions as First-Class Citizens
const addFunction: (a: number, b: number) => number = (a, b) => a + b;
console.log("Add Function:", addFunction(5, 7));  // Output: 12


let someValue: any = "This is a string!";
let stringLength: number = (<string>someValue).length;
console.log("String length:", stringLength);

// Optional Chaining (ES2020 feature, TypeScript supports it)
let personInfo = { name: "Bob", address: { city: "New York" } };
console.log(personInfo.address?.city);  // Output: New York
console.log(personInfo.phone?.number);