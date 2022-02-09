// Add to cart
let cartArr = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

function addToCart(id) {
    let clickedItem = cardsArray.find((item) => item.id === id);
    cartArr = [...cartArr, clickedItem];
    localStorage.setItem('cart', JSON.stringify(cartArr));
}