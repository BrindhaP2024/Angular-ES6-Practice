// var
console.log(a); 
var a = 5;
console.log(a); 

console.log(myFunction()); 

function myFunction() {
  return "Hello from hoisted function";
}
// let
console.log(b); 
let b = 10;
// const
console.log(c); 
const c = 20;

// var functionScope
function testVarScope() {
  if (true) {
    var x = 5; 
  }
  console.log(x); 
}
testVarScope();

// let , const function scope
function testLetConstScope() {
  if (true) {
    let y = 10; 
    const z = 15; 
    console.log(y); 
    console.log(z); 
  }
  console.log(y); 
  console.log(z); 
}
testLetConstScope();
// var 
for (var i = 0; i < 3; i++) {
  console.log(i); 
}
console.log(i); 
// let
for (let j = 0; j < 3; j++) {
  console.log(j); 
}
console.log(j); 

// var function scope
var myFunc; 

console.log(myFunc); 

myFunc = function() {
  console.log("This is a function expression");
};

myFunc(); 

// let const function scope
function testLetConstInside() {
  let message = "Hello from let!";
  const greeting = "Hello from const!";
  
  if (true) {
    let message = "Hello from inner let!"; 
    console.log(message); 
  }

  console.log(message); 
  console.log(greeting); 
}
testLetConstInside();

// Const with object

const obj = {
    name: "Brindha"
}
console.log(obj.name);

// obj.name = "Anu";
// console.log(name);