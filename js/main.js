const burgerMenu = document.querySelector(".header-burger");
const modalEl = document.querySelector(".modal");
const linkEl = document.querySelector(".modal-close");
burgerMenu.addEventListener("click", () => {
  modalEl.classList.add("active");
});
linkEl.addEventListener("click", () => {
  modalEl.classList.remove("active");
});
// Initialize Swiper
const swiper = new Swiper(".my-swiper", {
  slidesPerView: 1,
  spaceBetween: 18,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1136: {
      slidesPerView: 4,
    },
  },
});
