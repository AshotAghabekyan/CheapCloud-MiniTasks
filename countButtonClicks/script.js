

let button = document.getElementById("targetButton");
let count = document.getElementById("count");

button.addEventListener("click", function() {
    count.innerText = +count.innerText + 1;
})