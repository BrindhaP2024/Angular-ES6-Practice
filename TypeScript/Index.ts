// implicit -guess by assigned value
let firstName = "Dylan";
console.log("Brindha");

// Basics
let n: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];

let isDone: boolean = false;
let tuple: [string, number];
tuple = ["hello", 10];

console.log(isDone); 
console.log(n);  
console.log(color);    
console.log(list);     
console.log(tuple);    

// Enums

enum Color {
    Red,
    Green,
    Blue
  }
  let c: Color = Color.Green;
  console.log(c); 

  enum Colors{
    Red,
    pink,
    white
  }
  let s:Colors = Colors.white;
  console.log(s);

  interface Person {
    firstName: string;
    lastName: string;
  }
  // functions
  function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
  }
  
  let user = { firstName: "Harish", lastName: "Kumar" };
  console.log(greet(user)); 
  // class and functions and extends
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance}m.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  }
  
const dog = new Dog("Rex");
dog.bark();        
dog.move(10);     

//   compositiion -union types
  
function print(id: number | string) {
    console.log(`Your ID is: ${id}`);
  }
  
print(166561);   
print("202A");  


