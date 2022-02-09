let gridView = document.getElementById("gridView");
let listView = document.getElementById("listView");
let products = document.getElementsByClassName("products")[0];
const formInput = document.getElementById("myBtn");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const imageInput = document.getElementById("image");
const categoryInput = document.getElementById("category");
const addItem = document.getElementById("formInput");
const description = document.getElementById("textarea");

addItem.addEventListener("click", (e) => {
  let cardsArray = [];
  let result;
  e.preventDefault();
  let items = {
    id: new Date().getTime(),
    name: nameInput.value,
    price: price.value,
    image: imageInput.value,
    category: categoryInput.value,
    description: description.value,
  };
  if (
    nameInput.value &&
    price.value &&
    imageInput.value &&
    categoryInput.value &&
    description.value !== ""
  ) {
      result = addData([], items);
  }
    addToLocalstorage(result, items);
    let carda = JSON.parse(localStorage.getItem("cardsArray"));
    window.location.reload();    
});


// Display Produtcs

let cardsArray = JSON.parse(localStorage.getItem("cardsArray"));

function renderProducts(cardsArray) {
  if (cardsArray != null) {
    cardsArray.forEach((item) => {
      const product = document.createElement("div");
      product.className = "product";

      const img = document.createElement("img");
      img.className = "product-img";
      img.src = item.image;
      img.alt = "Image";

      const details = document.createElement("div");
      details.className = "details";

      const productName = document.createElement("h4");
      productName.className = "product-name";
      productName.textContent = item.name;

      const productDesc = document.createElement("p");
      productDesc.className = "product-desc";
      productDesc.textContent = item.description;

      const footCard = document.createElement("div");
      footCard.className = "foot-card";

      const productPrice = document.createElement("h5");
      productPrice.className = "product-price";
      productPrice.textContent = item.price;

      const cartIcon = document.createElement("i");
      cartIcon.className = "fas fa-shopping-cart";
      cartIcon.setAttribute("onclick", `addToCart(${item.id})`);
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

// renderProducts(cardsArray);


function showCards(cardsArray) {
  if (cardsArray != null) {
    cardsArray.forEach((item) => {
      const product = document.createElement("div");
      product.className = "product";

      const img = document.createElement("img");
      img.className = "product-img";
      img.src = item.image;
      img.alt = "Image";

      const details = document.createElement("div");
      details.className = "details";

      const productName = document.createElement("h4");
      productName.className = "product-name";
      productName.textContent = item.name;

      const productDesc = document.createElement("p");
      productDesc.className = "product-desc";
      productDesc.textContent = item.description;

      const footCard = document.createElement("div");
      footCard.className = "foot-card";

      const productPrice = document.createElement("h5");
      productPrice.className = "product-price";
      productPrice.textContent = item.price;

        const trash = document.createElement("i")
      const pencil = document.createElement("i");
            ;
        trash.className = "fas fa-trash-can";
        pencil.className = "fa-solid fa-pencil";
        
      trash.setAttribute(
        "onclick",
        `deletecard(${cardsArray}, ${Number(item.id)})`
      );
      products.appendChild(product);

      product.appendChild(img);
      product.appendChild(details);

      details.appendChild(productName);
      details.appendChild(productDesc);
      details.appendChild(footCard);

      footCard.appendChild(productPrice);
        footCard.appendChild(trash);
      footCard.appendChild(pencil);
        
    });
  }
   
}



showCards(cardsArray);
