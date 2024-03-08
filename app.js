const nav = document.querySelector("nav");
const openn = document.querySelector(".hamburger");
const closee = document.querySelector(".icon-close");
const date = document.querySelector(".date");
console.log(new Date().getFullYear());
date.textContent = new Date().getFullYear();
openn.addEventListener("click", () => {
  nav.classList.add("active");
});

closee.addEventListener("click", () => {
  nav.classList.remove("active");
});
