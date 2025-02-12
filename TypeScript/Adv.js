function displayValue(value) {
    if (typeof value === 'string') {
        console.log("Text value: ".concat(value));
    }
    else if (typeof value === 'number') {
        console.log("Number value: ".concat(value));
    }
    else {
        console.log('Invalid value type');
    }
}
displayValue('Greetings'); // Outputs: Text value: Greetings
displayValue(99.99); // Outputs: Number value: 99.99
var employeeInfo = {
    name: 'Jane',
    age: 28,
    jobId: 202,
    department: 'Engineering'
};
function printEmployeeInfo(emp) {
    if ('name' in emp && 'age' in emp && 'jobId' in emp && 'department' in emp) {
        console.log("Name: ".concat(emp.name, ", Age: ").concat(emp.age, ", Job ID: ").concat(emp.jobId, ", Department: ").concat(emp.department));
    }
    else {
        console.log('Invalid employee information');
    }
}
printEmployeeInfo(employeeInfo); // Outputs: Name: Jane, Age: 28, Job ID: 202, Department: Engineering
