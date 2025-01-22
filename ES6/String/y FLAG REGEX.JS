const regex = /abc/y;
const str = "abcabcabc";
let match;

match = regex.exec(str);
console.log(match); 

match = regex.exec(str);
console.log(match); 

match = regex.exec(str);
console.log(match); 

match = regex.exec(str);
console.log(match); 
