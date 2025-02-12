var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a, _b;
// Variables & Basic Types
var Name = "John Doe";
var age = 30;
var isActive = true;
var salary = 1000.50;
console.log("Name: ".concat(name, ", Age: ").concat(age, ", Active: ").concat(isActive, ", Salary: ").concat(salary));
// Arrays and Tuples
var numbers = [1, 2, 3, 4, 5];
var fruits = ["Apple", "Banana", "Orange"];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
var person = ["Alice", 25];
console.log("Person Tuple:", person);
// Enums
var Colors;
(function (Colors) {
    Colors[Colors["R"] = 1] = "R";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
var favoriteColor = Colors.Green;
console.log("Favorite Color:", favoriteColor);
// Functions
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Alice"));
// Optional Parameters in Functions
function introduce(name, age) {
    return age ? "".concat(name, " is ").concat(age, " years old") : "".concat(name, " is an unknown age");
}
console.log(introduce("Alice"));
console.log(introduce("Bob", 32));
// Default Parameters
function greetWithDefault(name, age) {
    if (age === void 0) { age = 30; }
    return "".concat(name, " is ").concat(age, " years old.");
}
console.log(greetWithDefault("Charlie"));
console.log(greetWithDefault("David", 40));
// Rest Parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));
var point = { x: 10, y: 20 };
console.log("Point:", point);
// Union Types
var identifier;
identifier = "123";
console.log("Identifier as string:", identifier);
identifier = 123;
console.log("Identifier as number:", identifier);
// let users: Person = {
//   name1: "John",
//   age: 25,
//   greet: () => {
//     console.log(`Hello, my name is ${user.name1}`);
//   }
// };
// user.greet();
// Classes
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        throw new Error("Method not implemented.");
    };
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}(Animal));
var dog = new Dog("Rex");
dog.speak();
// Access Modifiers
var PersonWithAccess = /** @class */ (function () {
    function PersonWithAccess(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    PersonWithAccess.prototype.showInfo = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Age: ").concat(this.age));
    };
    return PersonWithAccess;
}());
var personWithAccess = new PersonWithAccess(101, "Alice", 28);
personWithAccess.showInfo();
// Generics
function identity(arg) {
    return arg;
}
var output1 = identity("Hello, TypeScript!"); // T is inferred to be string
var output2 = identity(42); // T is inferred to be number
console.log(output1); // "Hello, TypeScript!"
console.log(output2); // 42
// Generic Class
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var stringBox = new Box("Boxed String");
console.log(stringBox.getValue()); // "Boxed String"
var numberBox = new Box(100);
console.log(numberBox.getValue()); // 100
// Modules in TypeScript
/*
import { add } from './utils';  // Importing add function from another module
console.log("Sum from module:", add(10, 20));  // Output: 30
*/
// Decorators (Experimental feature)
function logClass(target) {
    console.log("Class ".concat(target.name, " is being created!"));
}
var MyClass = function () {
    var _classDecorators = [logClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MyClass = _classThis = /** @class */ (function () {
        function MyClass_1() {
            console.log("MyClass instance created!");
        }
        return MyClass_1;
    }());
    __setFunctionName(_classThis, "MyClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
}();
var myClassInstance = new MyClass();
// Functions as First-Class Citizens
var addFunction = function (a, b) { return a + b; };
console.log("Add Function:", addFunction(5, 7)); // Output: 12
var someValue = "This is a string!";
var stringLength = someValue.length;
console.log("String length:", stringLength);
// Optional Chaining (ES2020 feature, TypeScript supports it)
var personInfo = { name: "Bob", address: { city: "New York" } };
console.log((_a = personInfo.address) === null || _a === void 0 ? void 0 : _a.city); // Output: New York
console.log((_b = personInfo.phone) === null || _b === void 0 ? void 0 : _b.number);
