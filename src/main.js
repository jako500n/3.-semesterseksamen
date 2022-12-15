import "./style.css";

// MENU
const menu_click = document.querySelector(".menu_click");
var menu_punkter = document.querySelector(".menu_punkter");
var menu_luk = document.querySelector(".menu_luk");

menu_click.addEventListener("click", (e) => {
  menu_punkter.classList.toggle("hidden");
});

menu_luk.addEventListener("click", (e) => {
  menu_punkter.classList.add("hidden");
});
