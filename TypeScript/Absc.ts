// Abstract Class
abstract class Vehicle {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    // Abstract Method
    abstract move(): void;
  
    // Regular Method
    public getName(): string {
      return this.name;
    }
  }
  
  // Subclass Car
  class Car extends Vehicle {
    constructor(name: string) {
      super(name); // Call the superclass constructor
    }
  
    // Implement the Abstract Method
    public move(): void {
      console.log(`${this.name} is driving.`);
    }
  }
  
  // Subclass Bicycle
  class Bicycle extends Vehicle {
    constructor(name: string) {
      super(name); // Call the superclass constructor
    }
  
    // Implement the Abstract Method
    public move(): void {
      console.log(`${this.name} is pedaling.`);
    }
  }
  
//   // Create instances and use the classes
//   let car = new Car('Toyota');
//   car.move(); 
//   console.log(car.getName()); 
  
  let bicycle = new Bicycle('Schwinn');
  bicycle.move(); 
  console.log(bicycle.getName());
  