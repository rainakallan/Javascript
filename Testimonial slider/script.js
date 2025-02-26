const testimonials = [
  {
    name: "Eric Dam",
    photoURl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    text: " I have been using Google for years now and I must say, it has been an incredible experience.The amount of advices and support I have received from this platform is unparalleled."
  },
  {
    name: "Samatha D.",
    photoURl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " I had the pleasure of working with Alaya Shaikh as my software developer and I couldn't be more satisfied with the results."
  },
  {
    name: "Sophie Anderson",
    photoURl: "https://images.unsplash.com/photo-1654765437407-a078b98f6b1b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " I am beyond impressed with Apple's laptop - it is reliable, effective, and just what I needed. Their products never cease to amaze me with their quality. Thank you, Apple, for making my work life so much easier!"
  },
];

const imgEL = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEL = document.querySelector(".username");

let idx = 0;
upadateTestimonial()

function upadateTestimonial() {
  const { name, photoURl, text } = testimonials[idx];
  imgEL.src = photoURl;
  textEl.innerText = text;
  usernameEL.innerText = name;
  idx++
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    upadateTestimonial()
  }, 10000)
}
