
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let sendFormButton = document.getElementById("sendForm");



function checkEmailValidation(email) {
    return emailRegex.test(email);
}

function checkUsernameValidation(username) {
    return username.length > 2 && username.length < 20
}

function onInputChange(key, value) {
    localStorage.setItem(key, value);
}



sendFormButton.addEventListener("click", function(event) {
    event.preventDefault();
    let emailInput = document.getElementById("userEmail");
    let usernameInput = document.getElementById("userName");

    if (!checkUsernameValidation(usernameInput.value)) {
        return alert("invalid username"); 
    }

    if (!checkEmailValidation(emailInput.value)) {
        return alert("invalid email");
    }

    localStorage.setItem("email", emailInput.value)
    localStorage.setItem("username", usernameInput.value);

    alert("user data successfully saved");
    sendFormButton.style.display = "none";


    emailInput.addEventListener("change", function() {
        setTimeout(() => {
            if (!checkEmailValidation(emailInput.value)) {
                return alert("invalid email");
            }

            onInputChange("email", emailInput.value);
            alert("user info updated");
        }, 500);
    })

    usernameInput.addEventListener("change", function() {
        setTimeout(() => {
            if (!checkUsernameValidation(usernameInput.value)) {
                return alert("invalid username");
            }
            onInputChange("username", usernameInput.value);
        })
    })
})






