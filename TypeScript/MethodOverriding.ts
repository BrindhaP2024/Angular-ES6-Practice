// Superclass
class Animals {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public makeSound(): void {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Subclass
  class Dogies extends Animal {
    constructor(name: string) {
      super(name); // Call the superclass constructor
    }
  
    // Method overriding
    public makeSound(): void {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Create instances and use the classes
  let genericAnimal = new Animal('Generic Animal');
  genericAnimal.makeSound(); // Outputs: Generic Animal makes a sound.
  
  let doggies = new Dog('Rex');
  dog.makeSound(); // Outputs: Rex barks.
  