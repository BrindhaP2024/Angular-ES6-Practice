// export {}
// Variable declerations and explicit and implicit type annotations
var message = "Learning TS in youtube ";
console.log(message);
var num = 10;
console.log(num);
var num2;
console.log(num2);
var funAct = ['Dance', 'Sing', 'Play'];
console.log(funAct);
var obj = {
    name: 'Brindha', year: 23,
    classVar: undefined
};
console.log(obj);
// var decleration
var name1 = "Nive";
function callName() {
    var locVar = "Call local";
    console.log(locVar, ',', name1);
}
callName();
console.log(this.locVar);
console.log(name1);
// class scope
var ScopeClass = /** @class */ (function () {
    function ScopeClass() {
        this.classVar = "class scope check here";
    }
    ScopeClass.prototype.accessClass = function () {
        var a = 0;
        var b = 0;
        var c = a + b;
        console.log(c);
    };
    return ScopeClass;
}());
// Create an instance of the ScopeClass
var obj1 = new ScopeClass();
console.log(obj1.classVar); // Log the class variable
