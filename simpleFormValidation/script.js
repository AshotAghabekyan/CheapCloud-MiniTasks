


let sendFormButton = document.getElementById("sendForm");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

sendFormButton.onclick = function(event) {
    event.preventDefault();
    let emailInput = document.getElementById("emailInput").value;
    if (!emailRegex.test(emailInput)) {
        alert("invalid email!");
    } else {
        alert("successful verification")
        window.location.reload();
    }
} 