let gridView = document.getElementById('gridView');
let listView = document.getElementById('listView');
let products = document.getElementsByClassName('products')[0];

// Toggle products view (grid | list)
gridView.onclick = () => {
    products.classList.remove("list");
    products.classList.add("grid");
};

listView.onclick = () => {
    products.classList.remove("grid");
    products.classList.add("list");
};

// Display Produtcs

let cardsArray = JSON.parse(localStorage.getItem('cardsArray'));

function renderProducts(cardsArray) {
    if (cardsArray != null) {
        cardsArray.forEach((item) => {
            const product = document.createElement('div');
            product.className = "product";

            const img = document.createElement('img');
            img.className = "product-img";
            img.src = item.image;
            img.alt = "Image";

            const details = document.createElement('div');
            details.className = "details";

            const productName = document.createElement('h4');
            productName.className = "product-name";
            productName.textContent = item.name;

            const productDesc = document.createElement('p');
            productDesc.className = "product-desc";
            productDesc.textContent = item.description;


            const footCard = document.createElement('div');
            footCard.className = "foot-card";

            const productPrice = document.createElement('h5');
            productPrice.className = "product-price";
            productPrice.textContent = item.price;


            const cartIcon = document.createElement('i');
            cartIcon.className = "fas fa-shopping-cart";
            cartIcon.setAttribute('onclick', `addToCart(${item.id})`);
            products.appendChild(product);

            product.appendChild(img);
            product.appendChild(details);

            details.appendChild(productName);
            details.appendChild(productDesc);
            details.appendChild(footCard);

            footCard.appendChild(productPrice);
            footCard.appendChild(cartIcon);
        });
    }
}

renderProducts(cardsArray);