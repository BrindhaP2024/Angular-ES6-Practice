// 1. Why is Destructuring Useful?
const person = { name: 'Anand', age: 25, city: 'Chennai' };
const numbers = [1, 2, 3, 4, 5];

// 2. Object Destructuring
const { name, age, city } = person;
console.log('Object Destructuring:', name, age, city);

const { name: firstName, age: years = 30 } = person;
console.log('Renamed and Default:', firstName, years);

// 3. Array Destructuring
const [first, second, third] = numbers;
console.log('Array Destructuring:', first, second, third);

const [,,thirdValue, fourth = 10] = numbers;
console.log('Skipping and Default:', thirdValue, fourth);

// 4. Mixed Destructuring
const mixed = { id: 1, info: { name: 'Banu', age: 40 }, scores: [10, 20, 30] };
const {
    info: { name: userName, age: userAge },
    scores: [firstScore, , thirdScore]
} = mixed;
console.log('Mixed Destructuring:', userName, userAge, firstScore, thirdScore);

// 5. Destructured Parameters
function displayPerson({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

displayPerson(person);

function displayPersonWithDefaults({ name = 'Unknown', age = 0, city = 'Unknown City' } = {}) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

displayPersonWithDefaults();
