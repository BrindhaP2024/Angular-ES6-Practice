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
// Superclass
var Employee1 = /** @class */ (function () {
    function Employee1(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Employee1.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Salary: ").concat(this.salary);
    };
    return Employee1;
}());
// Subclass Manager
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, salary, department) {
        var _this = _super.call(this, name, id, salary) || this; // Call the superclass constructor
        _this.department = department;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Department: ").concat(this.department);
    };
    Manager.prototype.conductMeeting = function () {
        console.log("".concat(this.name, " is conducting a meeting in the ").concat(this.department, " department."));
    };
    return Manager;
}(Employee1));
// Subclass Developer
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, id, salary, programmingLanguage) {
        var _this = _super.call(this, name, id, salary) || this; // Call the superclass constructor
        _this.programmingLanguage = programmingLanguage;
        return _this;
    }
    Developer.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Programming Language: ").concat(this.programmingLanguage);
    };
    Developer.prototype.writeCode = function () {
        console.log("".concat(this.name, " is writing code in ").concat(this.programmingLanguage, "."));
    };
    return Developer;
}(Employee1));
// Create instances and use the classes
var manager = new Manager('Alice', 101, 75000, 'HR');
console.log(manager.getDetails());
manager.conductMeeting();
var developer = new Developer('Bob', 102, 65000, 'TypeScript');
console.log(developer.getDetails());
developer.writeCode();
