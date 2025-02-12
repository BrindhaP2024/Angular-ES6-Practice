// any
let first:any = 1234;
console.log(first);
first = "Brindha";
console.log(first);
first = 29.0;
console.log(first);

let n1:number = 132;
let n2:number = 21.093;
let n3:number= 0b100;//binary
let n4:number = 0b0101;// binary
let n5:number = 0o71; //octal
let n6:number = 0xB; //HEXADECIMAL

console.log(n1,n2,n3,n4,n5,n6);


// string 

let str1 = 'String';
console.log(str1);
let str2="string1";
console.log(str2);
let str3 = `${str1} and ${str2}`;
console.log(str3);

// boolean 

let isValid:boolean = true; 
console.log(isValid);

// null - obj doesn't have any value

let empty:null = null;
console.log(empty);

// undefined
let undefinedVar;
console.log(undefinedVar);

// void - when function does not give any value

function displayVoid():void{
    console.log("Example for the void datatype in function");   
}
// symbol for creating unique values

// let unique = Symbol();
// console.log(unique);

// never --> no value /cant assign any value to it ,it throws an error , 
// to avoid errors
// helps to make that certain values or expressions are unreachable 
let neverValue:never;
console.log(neverValue);

// union - help to combine one or more data type values to one type 

let UnionVal: string | number | boolean ;
UnionVal = "One";
console.log(UnionVal);
UnionVal = 332;
console.log(UnionVal);
UnionVal = false;
console.log(UnionVal);










