let openModalBtn = document.getElementById("openModalBtn");
let closeModalBtn = document.getElementById("closeModalBtn");
let modal = document.getElementById("modalMenu");

openModalBtn.addEventListener("click", function() {
    modal.style.display = "flex";
    openModalBtn.style.display = "none";
    
})

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
    openModalBtn.style.display = "block";
})