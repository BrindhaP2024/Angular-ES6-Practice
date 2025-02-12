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
// Abstract Class
var Vehicle = /** @class */ (function () {
    function Vehicle(name) {
        this.name = name;
    }
    // Regular Method
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    return Vehicle;
}());
// Subclass Car
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name) {
        return _super.call(this, name) || this; // Call the superclass constructor
    }
    // Implement the Abstract Method
    Car.prototype.move = function () {
        console.log("".concat(this.name, " is driving."));
    };
    return Car;
}(Vehicle));
// Subclass Bicycle
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(name) {
        return _super.call(this, name) || this; // Call the superclass constructor
    }
    // Implement the Abstract Method
    Bicycle.prototype.move = function () {
        console.log("".concat(this.name, " is pedaling."));
    };
    return Bicycle;
}(Vehicle));
//   // Create instances and use the classes
//   let car = new Car('Toyota');
//   car.move(); 
//   console.log(car.getName()); 
var bicycle = new Bicycle('Schwinn');
bicycle.move();
console.log(bicycle.getName());
