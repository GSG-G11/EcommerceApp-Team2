// functions of the cart
let cartArr = localStorage.getItem("cart") ?
    JSON.parse(localStorage.getItem("cart")) : [];

function removeELment(index) {
    let element = document.getElementById(`tr-${index}`);
    cartArr = removeItem(index, cartArr);
    localStorage.setItem("cart", JSON.stringify(cartArr));

    element.remove();
}

const removeItem = (index, arr) => {
    let copy = arr.filter((item) => item.id !== index);
    return copy;
};


function addData(arr, obj) {
    return [...arr, obj];
}


// search function
function searchByName(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.includes(string)) {
            return [array[i]];
        }
    }
}
// create function to delete the card 
function deleteCard(arr, id) {
    return arr.filter((item) => {
        return item.id !== id
    })
}

// create function to edit the card 
function editCard(id, property, replaceValue, modifiedProducts) {
    return modifiedProducts.map((ele) => {
        if (Number(ele.id) === Number(id)) {
            ele[property] = replaceValue;
        }
        return ele;
    });
};

function newFiltered(arr) {
    const newArray = arr.filter(function(el) {
        return el.price >= 10;
    });
    return newArray;
}

const filterProduct = (price = "", products) => {
    const newProducts = [...products];
    if (price === "ASC")
        return newProducts.sort((a, b) => a.price - b.price); // sort price to low
    if (price === "DESC")
        return newProducts.sort((a, b) => b.price - a.price); // sort price to High
};

if (typeof module !== "undefined") {
    module.exports = {
        addData,
        searchByName,
        deleteCard,
        editCard,
        removeItem,
        filterProduct,
        newFiltered
    }
};