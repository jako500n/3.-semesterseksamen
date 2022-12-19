import "./style.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

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

// Cookieboks

const accepterCookie = document.querySelector("#accepter");
const afvisCookie = document.querySelector("#afvis");
const boks = document.querySelector("#cookieboks");

accepterCookie.addEventListener("click", fjernBoks);
afvisCookie.addEventListener("click", fjernBoks);

function fjernBoks() {
  boks.classList.add("hidden");
  sessionStorage.setItem("fjernboks", true);
}

if (sessionStorage.getItem("fjernboks")) {
  boks.classList.add("hidden");
}
