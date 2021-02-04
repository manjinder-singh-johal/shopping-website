let total = 0;
let basketItems = 0;

const totalElement = document.getElementById('total');
const basketItemsElement = document.getElementById('basket-items');

const buyItem = (price) => {
    basketItems++;
    total += price;

    totalElement.innerText = total;
    basketItemsElement.innerText = basketItems;
}

const clearBasket = () => {
    basketItems = 0;
    total = 0;

    totalElement.innerText = total;
    basketItemsElement.innerText = basketItems;
}