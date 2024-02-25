
const obj = {
  img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  title: "Italian Alps",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantiumrem quae maxime",
};


const addButton = document.getElementById("addElementBtn");
const container = document.getElementById("mainContainer");


addButton.addEventListener("click", function() {
    const elemBlock = document.createElement("div");
    elemBlock.setAttribute("class", "elemBlock");

    const backgroundBlock = document.createElement("div");
    backgroundBlock.setAttribute("class", "blockBackground");
    backgroundBlock.style.background = `url(${obj.img})`
    backgroundBlock.style.backgroundSize = "cover";
    backgroundBlock.style.backgroundRepeat = "no-repeat";
    elemBlock.append(backgroundBlock);

    const textBlock = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = obj.title;
    p.textContent = obj.text;

    textBlock.append(h2);
    textBlock.append(p);
    backgroundBlock.append(textBlock);

    container.append(elemBlock);
});