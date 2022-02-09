function addData(arr, obj) {
  return [...arr, obj];
}
// search function
function searchByName(array,string) {
   for (let i = 0; i < array.length; i++) {
     if (array[i].name.includes(string)) {
       return [array[i]];
     }
   }
}
 
module.exports = { addData, searchByName};
