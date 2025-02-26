const btnEl = document.querySelector(".btn");
const closeIconEL = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEL = document.querySelector("video");


btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEL.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEL.pause();
  videoEL.currentTime = 0;
});