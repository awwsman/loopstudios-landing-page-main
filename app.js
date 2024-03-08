const nav = document.querySelector("nav");
const openn = document.querySelector(".hamburger");
const closee = document.querySelector(".icon-close");

openn.addEventListener("click", () => {
  nav.classList.add("active");
});

closee.addEventListener("click", () => {
  nav.classList.remove("active");
});
