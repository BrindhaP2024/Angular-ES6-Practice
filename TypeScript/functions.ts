// named function
function sum(x,y){
    return x+y;
}
// anonymous
let add = function(x,y){
    return x+y;
}
// ts named function
function addition(x:number,y:number):number{
    return x+y;
}
let addN = function(x:number,y:number):number{
    return x+y;
}

console.log(addN(4,5));
console.log(add(54,89));
console.log(addition(44,65));
console.log(sum(3,90));

// optional parameter

function add1(x:number,y?:number):number{
    return x+y;
}
console.log((3));

// default parameter

function add22(x:number=4 , y:number=3):number{
    return x+y;
}

console.log("default parameter" ,add22(4));

// rest parameter ---> allow multiple params and 
// allow many argumaents to be stored in one variable

function restParam(...nums:number[]):number{
    let t= 0;
    nums.forEach(num =>t+= num);
    return t;
}

console.log(restParam(67,90));
console.log(restParam(67,90,909));
//  restParam()

// method overloading - rules 
// multiple methods with same name 
// different params types and return types 
// no of params should be the same 

// add up the overloaded signature

function subs(x:number,y:number):number;
    
function subs(x:string,y:string):string;
    //signature implementation 
function subs(x:any,y:any):any{
    return x+y;
}

console.log(subs(890,90));
console.log(subs("brin","dha"));


