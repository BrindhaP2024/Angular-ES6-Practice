// Control Flow Statements in TypeScript

// if, else if, else
function checkNumber(num: number): string {
    if (num > 0) {
      return `${num} is a positive number.`;
    } else if (num < 0) {
      return `${num} is a negative number.`;
    } else {
      return `${num} is zero.`;
    }
  }
  
  console.log(checkNumber(10));
  console.log(checkNumber(-5));
  console.log(checkNumber(0));
  
  // switch
  function getDayName(day: number): string {
    switch (day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'Invalid day';
    }
  }
  
  console.log(getDayName(1));
  console.log(getDayName(5));
  
  // for loop
  function sumOfNumbers(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumOfNumbers(5));
//   for in -->objects
  const users = {
    name: 'Brindha',
    age: 30,
    job: 'MEAN Stack Developer'
  };
  
  for (const key in users) {
    if (users.hasOwnProperty(key)) {
      console.log(`${key}: ${users[key]}`);
    }
  }
  

  //   for of - array and string

  const skills = ['JavaScript', 'TypeScript', 'Angular', 'Node.js'];

for (const skill of skills) {
  console.log(skill);
}

  
  // while loop
  function factorial(n: number): number {
    let result = 1;
    let i = n;
    while (i > 1) {
      result *= i;
      i--;
    }
    return result;
  }
  
  console.log(factorial(5));
  
  // do...while loop
  function countdown(n: number): void {
    let i = n;
    do {
      console.log(i);
      i--;
    } while (i > 0);
    console.log('Blast off!');
  }
  
  countdown(5);
  
  // branching statements: break and continue

  for(let i =0;i<=10;i++){
    if(i==3){
     continue;
    }
    console.log(i);
    
    if(i==6){
        break;
     
    }  
    console.log(i);
    // console.log('break');
 }

  function findFirstEvenNumber(numbers: number[]): number | undefined {
    for (const num of numbers) {
      if (num % 2 === 0) {
        return num; // Breaks out of the loop when the first even number is found
      }
    }
    return undefined;
  }
  
  console.log(findFirstEvenNumber([1, 3, 5, 8, 9]));
  
  function skipOddNumbers(numbers: number[]): number[] {
    const result = [];
    for (const num of numbers) {
      if (num % 2 !== 0) {
        continue; // Skips the current iteration if the number is odd
      }
      result.push(num);
    }
    return result;
  }
  
  console.log(skipOddNumbers([1, 2, 3, 4, 5, 6]));
  