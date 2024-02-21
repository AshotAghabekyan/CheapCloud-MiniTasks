

let randomColorsQueue = ["red", "yellow", "blue"];
let background = document.querySelector("body");

let changeToRedBtn = document.getElementById("toRed");
let changeToYellowBtn = document.getElementById("toYellow");
let changeToBlueBtn = document.getElementById("toBlue");
let changeToRandomColorBtn = document.getElementById("randomColor");


changeToBlueBtn.addEventListener("click", function() {
    background.style.backgroundColor = "blue";
})

changeToRedBtn.addEventListener("click", function() {
    background.style.backgroundColor = "red";
})

changeToYellowBtn.addEventListener("click", function() {
    background.style.backgroundColor = "yellow";
})

changeToRandomColorBtn.addEventListener("click", function() {
    let firstColor = randomColorsQueue[0];
    background.style.backgroundColor = firstColor;
    randomColorsQueue.shift();
    randomColorsQueue.push(firstColor);
})
