// const burger = document.querySelector(".burger-menu");
// const menu = document.querySelector(".menu");

// burger.addEventListener("click", () => {
//   menu.classList.toggle("menu-show");
// });

const menuBtn = document.querySelector(".navbar-toggler");
const collapsableMenu = document.querySelector(".navbar-collapse");

menuBtn.addEventListener("click", () => {
  collapsableMenu.classList.toggle("collapse");
});
