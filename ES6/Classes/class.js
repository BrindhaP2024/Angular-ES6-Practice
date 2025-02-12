// 1. Class-Like Structures in ECMAScript 5
class PersonES5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

const personES5 = new PersonES5('Alice', 25);
personES5.greet();

// 2. Class Declarations
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person('Bob', 30);
person.greet();

// 3. Class Expressions
const Animal = class {
    constructor(type) {
        this.type = type;
    }

    describe() {
        console.log(`This is a ${this.type}.`);
    }
};

const cat = new Animal('Cat');
cat.describe();

// 4. Classes as First-Class Citizens
function createInstance(classDefinition, ...args) {
    return new classDefinition(...args);
}

const funClass = createInstance(Animal, 'Dog');
funClass.describe();

// 5. Accessor Properties
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const user = new User('Charlie');
console.log(user.name);
user.name = 'Dave';
console.log(user.name);

// 6. Computed Member Names
const methodName = 'sayHello';
class Greeter {
    [methodName]() {
        console.log('Hello!');
    }
}

const greeter = new Greeter();
greeter.sayHello();

// 7. Generator Methods
class Numbers {
    *generateNumbers() {
        yield 1;
        yield 2;
        yield 3;
    }
}

const numbers = new Numbers();
for (const number of numbers.generateNumbers()) {
    console.log(number);
}

// 8. Static Members
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3));

// 9. Inheritance with Derived Classes
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person2 {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

const employee = new Employee('Eve', 35, 'Engineer');
employee.greet();
employee.work();

// 10. Using new.target in Class Constructors
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Cannot instantiate Shape directly.');
        }
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

try {
    const shape = new Shape();
} catch (e) {
    console.error(e.message);
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area());
