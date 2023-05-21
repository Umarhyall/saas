const menuToggle = document.querySelector(".menu-toggle input");
const a = document.querySelector("nav .a");
const b = document.querySelector("nav .b");
const c = document.querySelector("nav .c");
const d = document.querySelector("nav .d");
const e = document.querySelector("nav .e");

const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
a.addEventListener("click", function () {
  menuToggle.checked = false;
  nav.classList.toggle("slide");
});
b.addEventListener("click", function () {
  menuToggle.checked = false;
  nav.classList.toggle("slide");
});
c.addEventListener("click", function () {
  menuToggle.checked = false;
  nav.classList.toggle("slide");
});
d.addEventListener("click", function () {
  menuToggle.checked = false;
  nav.classList.toggle("slide");
});
e.addEventListener("click", function () {
  menuToggle.checked = false;
  nav.classList.toggle("slide");
});
