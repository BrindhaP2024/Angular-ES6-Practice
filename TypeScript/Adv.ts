
type TextOrNumber = string | number;

function displayValue(value: TextOrNumber): void {
  if (typeof value === 'string') {
    console.log(`Text value: ${value}`);
  } else if (typeof value === 'number') {
    console.log(`Number value: ${value}`);
  } else {
    console.log('Invalid value type');
  }
}

displayValue('Greetings');
displayValue(99.99); 

// Intersection Types with Type Guards
interface NameAndAge {
  name: string;
  age: number;
}

interface JobDetails {
  jobId: number;
  department: string;
}

type EmployeeInfo = NameAndAge & JobDetails;

const employeeInfo: EmployeeInfo = {
  name: 'Jane',
  age: 28,
  jobId: 202,
  department: 'Engineering'
};

function printEmployeeInfo(emp: EmployeeInfo): void {
  if ('name' in emp && 'age' in emp && 'jobId' in emp && 'department' in emp) {
    console.log(`Name: ${emp.name}, Age: ${emp.age}, Job ID: ${emp.jobId}, Department: ${emp.department}`);
  } else {
    console.log('Invalid employee information');
  }
}

printEmployeeInfo(employeeInfo);
