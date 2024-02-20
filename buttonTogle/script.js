

let targetButton = document.getElementById("targetButton");
targetButton.addEventListener("click", function() {
    buttonText = targetButton.textContent == "Hello"? "Goodbye" : "Hello";
    targetButton.innerHTML = buttonText;
})