// 1. Object Categories
const person = {
    name: 'Aradhana',
    age: 25,
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// 2. Object Literal Syntax Extensions
const propName = 'age';
const newPerson = {
    ...person,          
    [propName]: 26,     
    checkLiteral() {          
        console.log(`Hi, I am ${this.name} and I am ${this[propName]} years old`);
    }
};

// 3. New Methods
const entries = Object.entries(newPerson); 
const values = Object.values(newPerson);  
const keys = Object.keys(newPerson);       

console.log('Entries:', entries);
console.log('Values:', values);
console.log('Keys:', keys);

// 4. Duplicate Object Literal Properties
const duplicateProps = {
    a: 1,
    a: 2
};
console.log('Duplicate Properties:', duplicateProps.a); 

// 5. Own Property Enumeration Order
const obj = { b: 1, a: 2, 1: 3, 0: 4 };
console.log('Own Property Enumeration Order:', Object.keys(obj)); 

// 6. More Powerful Prototypes
const proto = {
    greet() {
        console.log(`Hello from prototype, ${this.name}`);
    }
};
const objWithProto = Object.create(proto);
objWithProto.name = 'Franklin';
objWithProto.greet(); 

// 7. A Formal Method Definition
const formalMethodObj = {
    method() {
        console.log('This is a formal method definition.');
    }
};
formalMethodObj.method(); 
