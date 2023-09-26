"use strict";
const hamburgerMenuIcon = document.querySelector(".ham-icon");
const hamburgerCloseIcon = document.querySelector(".close-icon");
const nav_header = document.querySelector(".mobile-links");
const nav = document.querySelector(".nav");

function showMenu() {
  nav_header.classList.add("active");
}
function hideMenu() {
  nav_header.classList.remove("active");
}

hamburgerMenuIcon.addEventListener("click", () => {
  showMenu();
});
hamburgerCloseIcon.addEventListener("click", () => {
  hideMenu();
});
document.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else if (window.scrollY === 0) nav.classList.remove("scrolled");
});
