var Tc = prompt("Введите температуру по Цельсию ");
while (!parseInt(Tc)) {
    alert("Вы ввели не число! Введите заново температуру по Цельсию ");
    Tc = prompt("Введите температуру по Цельсию ", '');
}
var Tf = (9 / 5) * Tc + 32;
alert("Температура по Фаренгейту = " + Tf);
console.log(Tc);