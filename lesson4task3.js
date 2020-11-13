var basket = {
    goods: [{
            name: "мяч", 
            property: "кожанный", 
            quantity: 2,
            price: 200
            }, 
            {
            name: "карандаш",
            property: "простой",
            quantity: 10,
            price: 10
            },
            {
            name: "ручка",
            property: "гелевая",
            quantity: 5,
            price: 50
            }, 
            {
            name: "блокнот",
            property: "а2",
            quantity: 3,
            price: 150
            }
           ],
            getSumBasket(){
            return this.goods.reduce((total,сartItem) => total += сartItem.price*сartItem.quantity,0);
            }
            
};

console.log("сумма корзины " + basket.getSumBasket());
