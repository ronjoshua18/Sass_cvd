const toggleMenu = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header_nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headernav.classList.toggle("open");
});