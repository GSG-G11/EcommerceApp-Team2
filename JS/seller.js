var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// create function to save the arrray of object to localstorage
function addToLocalstorage(arr) {
    let cardsArray = arr;

    // check if theres nothing saved in the storage and if not set the arr of object to cardsArray
    if (localStorage.getItem("cardsArray") == null) {
        localStorage.setItem("cardsArray", JSON.stringify(cardsArray));
    }
}
addToLocalstorage(addData)