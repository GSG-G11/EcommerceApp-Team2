// cart dom functions

let gridView = document.getElementById('gridView');
let listView = document.getElementById('listView');
let products = document.getElementsByClassName('products')[0];
const table = document.getElementsByTagName("table")[0];
const checkoutDiv = document.getElementsByClassName("total-price")[0];
let subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const total = document.getElementById("whole-total");
let subtotalNum = 0;


window.onload = function () {
  if (localStorage.getItem("cart")) {
    let cartArray = JSON.parse(localStorage.getItem("cart"));
    checkoutDiv.style.display = "flex";
    

    for (let i = 0; i < cartArray.length; i++) {

        const price = cartArray[i].price
    let totalPriceOfItem = price

    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", `tr-${cartArray[i].id}` );

    tableRow.classList.add("card");
    const tdInfo = document.createElement("td");
    const cardDetailsDiv = document.createElement("div");
    cardDetailsDiv.classList.add("cart-info");
    const productImage = document.createElement("img");
    productImage.setAttribute("src", `${cartArray[i].image}`);

    const infoDiv = document.createElement("div");
    const productName = document.createElement("p");
    productName.innerText = `${cartArray[i].name}`;
    const productPrice = document.createElement("span");
    productPrice.innerText = `Price: $${cartArray[i].price}`;
    const breakIt = document.createElement("br");
    const removeBtn = document.createElement("a");
    removeBtn.setAttribute("id", `btn-${cartArray[i].id}` );
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {removeELment(cartArray[i].id) };

    const tdQuantity = document.createElement("td");
    let quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("value", "1");
    quantityInput.addEventListener("change",  ()=>{
        let oldPrice = totalPriceOfItem;
       totalPriceOfItem = price * Number(quantityInput.value);
       tdTotal.innerHTML = "$"+ parseInt(totalPriceOfItem).toFixed(2);

          subtotalNum += totalPriceOfItem - oldPrice;

          subtotal.textContent = "$" + parseInt(subtotalNum).toFixed(2);
  tax.textContent = "$" + (parseInt(subtotalNum)* 0.08 ).toFixed(2) ;
  total.textContent = "$" + ( (parseInt(subtotalNum)* 0.08 )+ parseInt(subtotalNum)).toFixed(2) ;
    })

    let tdTotal = document.createElement("td");
    tdTotal.textContent = "$"+ parseInt(totalPriceOfItem).toFixed(2);

    infoDiv.appendChild(productName);
    infoDiv.appendChild(productPrice);
    infoDiv.appendChild(breakIt);
    infoDiv.appendChild(removeBtn);

    cardDetailsDiv.appendChild(productImage);
    cardDetailsDiv.appendChild(infoDiv);

    tdInfo.appendChild(cardDetailsDiv);

    tdQuantity.appendChild(quantityInput);

    // tdTotal.appendChild(document.createTextNode("$0"));

    tableRow.appendChild(tdInfo);
    tableRow.appendChild(tdQuantity);
    tableRow.appendChild(tdTotal);

    table.appendChild(tableRow);

    subtotalNum += totalPriceOfItem;

    }

  } else {

    const para = document.createElement("p");
    para.classList.add("empty-cart");
    const textNode = document.createTextNode("Your cart is empty :(");
    para.appendChild(textNode);
    table.appendChild(para);
    checkoutDiv.style.display = "none";

  }

  console.log(subtotalNum)
  subtotal.textContent = "$" + parseInt(subtotalNum).toFixed(2);
  tax.textContent = "$" + (parseInt(subtotalNum)* 0.08 ).toFixed(2) ;
  total.textContent = "$" + ( (parseInt(subtotalNum)* 0.08 )+ parseInt(subtotalNum)).toFixed(2) ;
  
};

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
