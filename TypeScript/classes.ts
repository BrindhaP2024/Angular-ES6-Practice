class Human {
    type1: string;
    type2: string;
  
    // Constructor to initialize properties
    constructor(type1: string = '', type2: string = '') {
      this.type1 = type1;
      this.type2 = type2;
    }
  
    // Method to get full type
    getFullType(): void {
      console.log(this.type1);
      console.log(this.type2);
    }
  
    // Method to assign values
    setFullType(type1: string, type2: string): void {
      this.type1 = type1;
      this.type2 = type2;
    }
  }
  
  // Access variables using object and setFullType method
  let human1 = new Human();
  human1.type1 = 'male';
  human1.type2 = 'female';
  human1.getFullType();
  
  // Assign values using method
  human1.setFullType('female', 'male');
  human1.getFullType();
  
  // Assign values using constructor
  let human2 = new Human('non-binary', 'undefined');
  human2.getFullType();
  