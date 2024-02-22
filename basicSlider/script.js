

let imgArray = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://img.freepik.com/premium-photo/sunset-sea-created-with-generative-ai-tools_732031-3446.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=ais",
];
    
let sliderImage = document.getElementById("sliderImage");
let position = 0;
    
function updateSlider() {
    sliderImage.src = imgArray[position];
}

updateSlider();
    
   
    
let nextButton = document.getElementById("next");
nextButton.addEventListener("click", function() {
    if (position === imgArray.length - 1) {
        position = 0;
    } else {
        ++position;
    }
    updateSlider();
});
    

let previousButton = document.getElementById("previous");
previousButton.addEventListener("click", function() {
    if (position === 0) {
        position = imgArray.length - 1;
    } else {
        --position;
    }
    updateSlider();
});
    