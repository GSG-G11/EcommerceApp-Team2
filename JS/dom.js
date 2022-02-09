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