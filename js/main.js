const burgerMenu = document.querySelector(".header-burger");
const modalEl = document.querySelector(".modal");
const modalBuyEl = document.querySelector(".modal-buy");
const linkEl = document.querySelector(".modal-close");
const buyNowBtns = document.querySelectorAll(".buy-button");
const closeBtn = document.querySelector(".modal-buy__close");
burgerMenu.addEventListener("click", () => {
  modalEl.classList.add("active");
});
linkEl.addEventListener("click", () => {
  modalEl.classList.remove("active");
});
buyNowBtns.forEach((element) => {
  element.addEventListener("click", () => {
    modalBuyEl.classList.add("active-buy");
  });
});

closeBtn.addEventListener("click", () => {
  modalBuyEl.classList.remove("active-buy");
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
