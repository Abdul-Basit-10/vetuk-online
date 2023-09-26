"use strict";
const hamburgerMenuIcon = document.querySelector(".ham-icon");
const hamburgerCloseIcon = document.querySelector(".close-icon");
const nav_header = document.querySelector(".mobile-links");

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
