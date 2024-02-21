

let sendButton = document.getElementById("sendInput")

sendButton.addEventListener("click", function() {
    let userInput = document.getElementById("userText");
    let outputElement = document.getElementById("output");
    outputElement.textContent = userInput.value;
});