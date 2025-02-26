const imageContainerEl = document.querySelector(".img-container");
const buttonEL = document.querySelector(".btn");

buttonEL.addEventListener("click", () => {
  imageNum = 10;
  addNewImages()
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImageEl = document.createElement("img")
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;

    imageContainerEl.appendChild(newImageEl);
  }

}