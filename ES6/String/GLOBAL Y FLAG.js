const regexGlobal = /abc/g;
const strGlobal = "abcabcabc";
let matchGlobal;

matchGlobal = regexGlobal.exec(strGlobal);
console.log(matchGlobal);

matchGlobal = regexGlobal.exec(strGlobal);
console.log(matchGlobal); 

matchGlobal = regexGlobal.exec(strGlobal);
console.log(matchGlobal); 

matchGlobal = regexGlobal.exec(strGlobal);
console.log(matchGlobal); 
