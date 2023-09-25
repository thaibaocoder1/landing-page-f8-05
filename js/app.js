// Sticky navbar
const headerEl = document.querySelector(".header");
const headerHeight = headerEl.offsetHeight;
document.addEventListener("scroll", function () {
  scrollY > headerHeight
    ? headerEl.classList.add("header--active")
    : headerEl.classList.remove("header--active");
});
