

let targetButton = document.getElementById("textChangeButton");
let textDiv = document.querySelector("#textContent > p")

targetButton.addEventListener("click", function() {
    textDiv.innerHTML = "text changed";
})
