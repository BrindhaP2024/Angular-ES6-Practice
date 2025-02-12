// export {}
// Variable declerations and explicit and implicit type annotations
let message = "Learning TS in youtube ";
console.log(message);

let num:number = 10;
console.log(num);
let num2;
console.log(num2);

let funAct:string[] = ['Dance','Sing','Play'];
console.log(funAct);

let obj :{
    classVar: any;name:string,year:number
} = {
    name: 'Brindha', year: 23,
    classVar: undefined
};
console.log(obj);
// var decleration

var name1:string = "Nive";


function callName(){
    let locVar:string="Call local";
    console.log(locVar,',',name1);
}
callName();
console.log(this.locVar);
console.log(name1);

// class scope
class ScopeClass {
    classVar: string = "class scope check here";
  
    accessClass() {
      var a: number = 0;
      var b: number = 0; 
      var c: number = a + b;
      console.log(c); 
    }
  }
  
  // Create an instance of the ScopeClass
  let obj1 = new ScopeClass();
  console.log(obj1.classVar); // Log the class variable
  
 
