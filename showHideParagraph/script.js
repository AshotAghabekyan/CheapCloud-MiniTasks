

let button = document.getElementById("hideShowButton");
let paragraph = document.querySelector("#textContainer > p");

button.addEventListener("click", function() {
    if (paragraph.style.display == "none") {
        paragraph.style.display = "block";
        button.textContent = "Hide Paragraph";
    } else {
        paragraph.style.display = "none";
        button.textContent = "Show Paragraph";
    }
});
