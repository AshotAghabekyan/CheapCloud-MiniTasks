document.getElementById("mobileNavToggle").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
});

document.getElementById("closeMobileNavBar").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
}) 

window.addEventListener("click",  function(event) {
    if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
});