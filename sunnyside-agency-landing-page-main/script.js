var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");

// Toggle this is the toggle function
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});