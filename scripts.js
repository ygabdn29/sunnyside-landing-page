"use strict";

const btnMobileNav = document.querySelector(".icon-mobile-nav");
const mainNavList = document.querySelector(".main-nav-list");

btnMobileNav.addEventListener("click", function () {
  mainNavList.classList.toggle("main-nav--active");
});
