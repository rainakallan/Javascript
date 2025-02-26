const navbarEL = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");
console.log(navbarEL.offsetHeight);


window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainerEl.offsetTop - navbarEL.offsetHeight - 50) {
    navbarEL.classList.add("active");
  } else {
    navbarEL.classList.remove("active");
  }
});