function toSite(string) {
  let fullPage = string + ".html";
  window.location.href = fullPage;
}

const startLink = document.querySelector(".startsida-nav-item");

let menu = document.querySelector(".hamburger-menu");
let burger = document.querySelector(".hamburger");
let closeMenu = document.querySelector(".menu-exit");

burger.addEventListener("click", function () {
  if (menu.classList.contains("reset-animation")) {
    menu.classList.remove("reset-animation");
  }

  menu.classList.add("dropdown-animation");
  setTimeout(() => {
    burger.classList.add("hide");
    closeMenu.classList.add("show");
  }, 100);
});

closeMenu.addEventListener("click", function () {
  if (menu.classList.contains("dropdown-animation")) {
    menu.classList.remove("dropdown-animation");
  }

  menu.classList.add("reset-animation");
  setTimeout(() => {
    burger.classList.remove("hide");
    closeMenu.classList.remove("show");
  }, 100);
});
