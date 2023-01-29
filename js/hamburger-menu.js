const burger = document.querySelector(".burger-menu");
const menu = document.querySelectorAll(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-show");
});
