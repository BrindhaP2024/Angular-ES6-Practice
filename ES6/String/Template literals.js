// Tagged template function to process the template literal
function processTemplate(strings, ...values) {
    console.log("Raw strings:", strings.raw); // Access raw strings
    return strings.reduce((result, string, i) => `${result}${string}${values[i] || ''}`, '');
}

// Defining a tag function
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<strong>${values[i] || ''}</strong>`, '');
}

// Example of using template literals
const userName = 'Anusha';
const userAge = 20;
console.log(`Hello, my name is ${userName}. I am ${userAge} years old.`);

// Using the processTemplate tagged template
const processedOutput = processTemplate`Hello, my name is ${userName}. I am ${userAge} years old.\nIsn't that great?`;
console.log(processedOutput);

// Using the highlight tagged template
const highlightedOutput = highlight`My name is ${userName} and I am ${userAge} years old.`;
console.log(highlightedOutput);

// Accessing raw values in template literals
function rawExample(strings, ...values) {
    console.log(strings.raw); 
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const rawOutput = rawExample`First line\nSecond line`;
console.log(rawOutput);
