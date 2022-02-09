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
    return item.id !== id;
  });
}

function newFiltered(arr) {
  const newArray = arr.filter(function (el) {
    return el.price >= 10;
  });
  return newArray;
}
module.exports = { addData, searchByName, deleteCard, newFiltered };
