// Superclass
// Interfaces in TypeScript define the structure of an object. They are used to specify the type of an object, defining the properties and methods it should have.
class Employee1 {
    public name: string;
    public id: number;
    public salary: number;
  
    constructor(name: string, id: number, salary: number) {
      this.name = name;
      this.id = id;
      this.salary = salary;
    }
  
    public getDetails(): string {
      return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
    }
  }
  
  // Subclass Manager
  class Manager extends Employee1 {
    public department: string;
  
    constructor(name: string, id: number, salary: number, department: string) {
      super(name, id, salary); // Call the superclass constructor
      this.department = department;
    }
  
    public getDetails(): string {
      return `${super.getDetails()}, Department: ${this.department}`;
    }
  
    public conductMeeting(): void {
      console.log(`${this.name} is conducting a meeting in the ${this.department} department.`);
    }
  }
  
  // Subclass Developer
  class Developer extends Employee1 {
    public programmingLanguage: string;
  
    constructor(name: string, id: number, salary: number, programmingLanguage: string) {
      super(name, id, salary); // Call the superclass constructor
      this.programmingLanguage = programmingLanguage;
    }
  
    public getDetails(): string {
      return `${super.getDetails()}, Programming Language: ${this.programmingLanguage}`;
    }
  
    public writeCode(): void {
      console.log(`${this.name} is writing code in ${this.programmingLanguage}.`);
    }
  }
  
  // Create instances and use the classes
  let manager = new Manager('Alice', 101, 75000, 'HR');
  console.log(manager.getDetails());
  manager.conductMeeting();
  
  let developer = new Developer('Bob', 102, 65000, 'TypeScript');
  console.log(developer.getDetails());
  developer.writeCode();
  