
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let sendFormButton = document.getElementById("sendForm");
let emailInput = document.getElementById("userEmail");
let usernameInput = document.getElementById("userName");
let formSubmitted = false;

function checkEmailValidation(email) {
    return emailRegex.test(email);
}

function checkUsernameValidation(username) {
    return username.length > 2 && username.length < 20
}

function onInputChange(key, value) {
    localStorage.setItem(key, value);
}


function onSubmitForm(event) {
    event.preventDefault();

    if (!checkUsernameValidation(usernameInput.value)) {
        return alert("Invalid username");
    }

    if (!checkEmailValidation(emailInput.value)) {
        return alert("Invalid email");
    }

    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("username", usernameInput.value);

    alert("User data successfully saved");
    sendFormButton.style.display = "none";
    formSubmitted = true;
    window.location.reload();
}

sendFormButton.addEventListener("click", onSubmitForm)




function attachChangeListeners() {
    if (formSubmitted) {
        emailInput.addEventListener("change", function() {
            setTimeout(() => {
                if (!checkEmailValidation(emailInput.value)) {
                    return alert("Invalid email");
                }

                onInputChange("email", emailInput.value);
                alert("User info updated");
            }, 500);
        });

        usernameInput.addEventListener("change", function() {
            setTimeout(() => {
                if (!checkUsernameValidation(usernameInput.value)) {
                    return alert("Invalid username");
                }
                onInputChange("username", usernameInput.value);
            }, 500);
        });
    }
}



function loadUserInfo() {
    let savedEmail = localStorage.getItem("email");
    let savedUsername = localStorage.getItem("username");

    if (savedEmail && savedUsername) {
        sendFormButton.style.display = "none";
        emailInput.value = savedEmail;
        usernameInput.value = savedUsername;
        formSubmitted = true;
    }
    attachChangeListeners();
}

document.addEventListener("DOMContentLoaded", loadUserInfo);





