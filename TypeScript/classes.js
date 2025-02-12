var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.getFullType = function () {
        console.log(this.type1); //access class level variable using 'this' keyword
        console.log(this.type2);
    };
    return Human;
}());
var H = new Human();
H.type1 = "male";
H.type2 = "female";
H.getFullType();
