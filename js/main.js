// js/main.js

// 1) Mobile menu toggle
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// 2) Hide transparent header once you scroll past the hero
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 100) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
