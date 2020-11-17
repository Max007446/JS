var obj = {
    сотни: ""
    , десятки: ""
    , единицы: ""
};
var obj2 = {};
var num = prompt("Введите число от 0 до 999");
while (!parseInt(num)) {
    num = prompt("Введите число от 0 до 999");
}
if (num > 999) {
    console.log(obj2);
}
else {
    obj.сотни = Math.trunc(num / 100);
    obj.десятки = Math.trunc((num % 100) / 10);
    obj.единицы = (num % 100) % 10;
    console.log(obj);
}