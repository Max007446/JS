var basket = [["мяч", "кожанный", 2, 200]
         , ["карандаш", "простой", 10, 10]
         , ["ручка", "гелевая", 5, 50]
         , ["блокнот", "а2", 3, 150]];
let sumBasket = ountBasketPrice(basket);
console.log("сумма корзины " + sumBasket);

function ountBasketPrice(a) {
    let sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = parseInt(a[i][2]) * parseInt(a[i][3]) + sum;
    }
    return sum;
}