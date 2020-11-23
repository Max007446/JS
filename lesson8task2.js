'use strict'
if (!("a" in window)) {
    var a = 1;
}
alert(a); //undefined

var b = function a(x) {
    x && a(--x);
};
alert(a);  //a is not defined error

function a(x) {
    return x * 2;
}
var a;
alert(a); //function a(x) {
          // return x * 2;
          //}

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);   // 3

function a() {
    alert(this);
}
a.call(null); //Null