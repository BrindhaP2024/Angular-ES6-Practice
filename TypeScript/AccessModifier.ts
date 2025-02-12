class PersonData {
    public name: string;
    private age: number;
    protected address: string;
  
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    public getName(): string {
      return this.name;
    }
  
    private getAge(): number {
      return this.age;
    }
  
    protected getAddress(): string {
      return this.address;
    }
  
    public getDetails(): string {
      return `Name: ${this.name}, Age: ${this.getAge()}, Address: ${this.getAddress()}`;
    }
  }
  
  class Employee extends PersonData {
    private jobTitle: string;
  
    constructor(name: string, age: number, address: string, jobTitle: string) {
      super(name, age, address);
      this.jobTitle = jobTitle;
    }
  
    public getJobDetails(): string {
      return `Job Title: ${this.jobTitle}, Address: ${this.getAddress()}`;
    }
  }
  
  let personData = new PersonData('Brindha', 23, 'Chennai');
  console.log(personData.getName());
  console.log(personData.getDetails());
  
  let employee = new Employee('Raj', 25, 'Bangalore', 'Software Engineer');
  console.log(employee.getName());
  console.log(employee.getJobDetails());
  