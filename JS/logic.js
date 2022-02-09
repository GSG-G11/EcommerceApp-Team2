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
// craete function to delete the card 
function deleteCard(arr, id) {
    return arr.filter((item) => {
        return item.id !== id
    })
}

// craete function to edit the card 
function editCard(id, property, replaceValue, modifiedProducts) {
    return modifiedProducts.map((ele) => {
        if (Number(ele.id) === Number(id)) {
            ele[property] = replaceValue;
        }
        return ele;
    });
};