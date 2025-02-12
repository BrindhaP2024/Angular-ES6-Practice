// named function
function sum(x, y) {
    return x + y;
}
// anonymous
var add = function (x, y) {
    return x + y;
};
// ts named function
function addition(x, y) {
    return x + y;
}
var addN = function (x, y) {
    return x + y;
};
console.log(addN(4, 5));
console.log(add(54, 89));
console.log(addition(44, 65));
console.log(sum(3, 90));
// optional parameter
function add1(x, y) {
    return x + y;
}
console.log((3));
// default parameter
function add22(x, y) {
    if (x === void 0) { x = 4; }
    if (y === void 0) { y = 3; }
    return x + y;
}
console.log("default parameter", add22(4));
// rest parameter ---> allow multiple params and 
// allow many argumaents to be stored in one variable
function restParam() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var t = 0;
    nums.forEach(function (num) { return t += num; });
    return t;
}
console.log(restParam(67, 90));
console.log(restParam(67, 90, 909));
//signature implementation 
function subs(x, y) {
    return x + y;
}
console.log(subs(890, 90));
console.log(subs("brin", "dha"));
