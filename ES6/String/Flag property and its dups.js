// flag and its dups
const originalRegex = /abc/g;
const duplicatedRegex = new RegExp(originalRegex.source, 'gy');
console.log(duplicatedRegex);

const regex = /abc/g;
console.log(regex.flags);

const regexWithFlags = /abc/gi;
console.log(regexWithFlags.flags);

const str1 = "abc abc abc";
const regex1 = /abc/g;
const matches = str1.match(regex1);
console.log(matches);

const regex2 = /abc/;
const match = str1.match(regex2);
console.log(match);

const str2 = "abcabcabc";
const regex3 = /abc/y;
console.log(str2.search(regex3));
console.log(str2.search(regex3));
console.log(str2.search(regex3));

const regex4 = /abc/g;
const newRegex = new RegExp(regex4.source, 'gi');
console.log(regex4.flags);
console.log(newRegex.flags);
