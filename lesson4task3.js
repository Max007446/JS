let basket = {
    object1: {
        name: "мяч"
        , property: "кожанный"
        , quantity: 2
        , price: 200
    }
    , object2: {
        name: "карандаш"
        , property: "простой"
        , quantity: 10
        , price: 10
    }
    , object3: {
        name: "ручка"
        , property: "гелевая"
        , quantity: 5
        , price: 50
    }
    , object4: {
        name: "блокнот"
        , property: "а2"
        , quantity: 3
        , price: 150
    }
}
let sumBasket = ountBasketPrice(basket);
console.log("сумма корзины " + sumBasket);

function ountBasketPrice(a) {
    let sum = 0;
    sum = basket.object1.price * basket.object1.quantity + basket.object2.price * basket.object2.quantity + basket.object3.price * basket.object3.quantity + basket.object4.price * basket.object4.quantity;
    return sum;
}