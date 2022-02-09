function boxesCheck() {
  let ARRR = newFiltered(data);
  // console.log(newArray)
  const checkbox = document.querySelectorAll("input[type=checkbox]");
  console.log(checkbox);
  checkbox.addEventListener("change", function () {});
}

boxesCheck();

////////////////////
let cartArr = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function addToCart(id) {
  let clickedItem = cardsArray.find((item) => item.id === id);
  cartArr = [...cartArr, clickedItem];
  localStorage.setItem("cart", JSON.stringify(cartArr));
}
