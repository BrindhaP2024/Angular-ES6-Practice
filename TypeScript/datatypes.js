// any
var first = 1234;
console.log(first);
first = "Brindha";
console.log(first);
first = 29.0;
console.log(first);
var n1 = 132;
var n2 = 21.093;
var n3 = 4; //binary
var n4 = 5; // binary
var n5 = 57; //octal
var n6 = 0xB; //HEXADECIMAL
console.log(n1, n2, n3, n4, n5, n6);
// string 
var str1 = 'String';
console.log(str1);
var str2 = "string1";
console.log(str2);
var str3 = "".concat(str1, " and ").concat(str2);
console.log(str3);
// boolean 
var isValid = true;
console.log(isValid);
// null - obj doesn't have any value
var empty = null;
console.log(empty);
// undefined
var undefinedVar;
console.log(undefinedVar);
// void - when function does not give any value
function displayVoid() {
    console.log("Example for the void datatype in function");
}
// symbol for creating unique values
// let unique = Symbol();
// console.log(unique);
// never --> no value /cant assign any value to it ,it throws an error , 
// to avoid errors
// helps to make that certain values or expressions are unreachable 
var neverValue;
console.log(neverValue);
// union - help to combine one or more data type values to one type 
var UnionVal;
UnionVal = "One";
console.log(UnionVal);
UnionVal = 332;
console.log(UnionVal);
UnionVal = false;
console.log(UnionVal);
