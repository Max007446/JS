var a = -5;
var b = 10;
if (a >= 0 && b >= 0) {
    alert("Выводим  a - b = " + (a - b));
}
else if (a < 0 && b < 0) {
    alert("Выводим  a * b =" + (a * b));
}
else if ((a < 0 && b > 0) || (b < 0 && a > 0)) {
    alert("Выводим  a + b =" + (a + b));
}