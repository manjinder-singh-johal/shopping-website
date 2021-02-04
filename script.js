let total = 0;
let basketItems = 0;

const buyItemOne = () => {
    basketItems++;
    total += 20;

    document.getElementById('total').innerText = total;
    document.getElementById('basket-items').innerText = basketItems;
}

const buyItemTwo = () => {
    basketItems++;
    total += 50;

    document.getElementById('total').innerText = total;
    document.getElementById('basket-items').innerText = basketItems;
}

const clearBasket = () => {
    basketItems = 0;
    total = 0;

    document.getElementById('total').innerText = total;
    document.getElementById('basket-items').innerText = basketItems;
}