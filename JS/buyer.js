function boxesCheck() {
    let ARRR = newFiltered(data);
    // console.log(newArray)
    const checkbox = document.querySelectorAll("input[type=checkbox]");
    console.log(checkbox);
    checkbox.addEventListener("change", function() {});
}

boxesCheck();

let gridView = document.getElementById('gridView');
let listView = document.getElementById('listView');
let productss = document.getElementsByClassName('products')[0];

// Toggle products view (grid | list)
gridView.onclick = () => {
    productss.classList.remove("list");
    productss.classList.add("grid");
};

listView.onclick = () => {
    productss.classList.remove("grid");
    productss.classList.add("list");
};