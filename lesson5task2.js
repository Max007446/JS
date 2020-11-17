
const cartTable = {
    render(good) {
       return   `<div class="good"><div> <b> Наименование</b>: ${good.product_name}</div><div><b>Цена за шт.</b>: ${good.price}</div><div><b>Количество</b>: ${good.quantity}</div> <div><b>Стоимость</b>: ${good.quantity * good.price}</div></div>`;
    }
}
const basket = {
    
    cartClearButton: null, 
    cartCell: null, 
    cartTable,
    
    goods: [
        {
            product_name: 'карандаш',
            price: 500, 
            quantity: 5,
        }, 
        {
            product_name: 'ручка',
            price: 10, 
            quantity: 20, 
        }, 
        {
            product_name: 'блокнот', 
            price: 150,
            quantity: 2,
        }, 
        {
            product_name: 'ластик', 
            price: 50, 
            quantity: 2, 
        },
    ],
    getSumCart() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    }, 
    init() {
        this.cartCell = document.querySelector('.cart');
        this.cartClearButton = document.querySelector('.clear-btn');
        this.cartClearButton.addEventListener('click', this.clearCart.bind(this));
        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartCell.insertAdjacentHTML('beforeend', this.cartTable.render(good));
            });
            this.cartCell.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getSumCart()}`);
        }
        else {
            this.cartCell.textContent = 'Корзина пуста';
        }
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};
basket.init();