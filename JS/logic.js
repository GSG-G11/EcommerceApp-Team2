// functions of the cart
let cartArr = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function removeELment(index) {
//   subtotalNum -= cartArr[index].price * quantityInput.value;
  let element = document.getElementById(`tr-${index}`);
  cartArr = removeItem(index);
  localStorage.setItem("cart", JSON.stringify(cartArr));

  element.remove();
}

const removeItem = (index) => {
  let copy = cartArr.filter((item) => item.id !== index);
  return copy;
};
