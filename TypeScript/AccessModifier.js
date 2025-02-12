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
var PersonData = /** @class */ (function () {
    function PersonData(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    PersonData.prototype.getName = function () {
        return this.name;
    };
    PersonData.prototype.getAge = function () {
        return this.age;
    };
    PersonData.prototype.getAddress = function () {
        return this.address;
    };
    PersonData.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.getAge(), ", Address: ").concat(this.getAddress());
    };
    return PersonData;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, address, jobTitle) {
        var _this = _super.call(this, name, age, address) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.getJobDetails = function () {
        return "Job Title: ".concat(this.jobTitle, ", Address: ").concat(this.getAddress());
    };
    return Employee;
}(PersonData));
var personData = new PersonData('Brindha', 23, 'Chennai');
console.log(personData.getName());
console.log(personData.getDetails());
var employee = new Employee('Raj', 25, 'Bangalore', 'Software Engineer');
console.log(employee.getName());
console.log(employee.getJobDetails());
