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

// filter Function
const filterProduct = (price = "", products) => {
    const newProducts = [...products];
    if (price === "ASC")
        return newProducts.sort((a, b) => a.price - b.price); // sort price to low
    if (price === "DESC")
        return newProducts.sort((a, b) => b.price - a.price); // sort price to High
};

module.exports = { addData, searchByName, filterProduct };