const burgerMenu = document.querySelector(".header-burger");
const modalEl = document.querySelector(".modal");
const modalBuyEl = document.querySelector(".modal-buy");
const modalReviewEl = document.querySelector(".modal-review");
const modalExploreEl = document.querySelector(".modal-explore");
const linkEl = document.querySelector(".modal-close");
const buyNowBtns = document.querySelectorAll(".buy-button");
const reviewBtn = document.querySelector(".is-love__btn");
const closeBtn = document.querySelector(".modal-buy__close");
const closeReviewBtn = document.querySelector(".modal-review__close");
const closeExploreBtn = document.querySelector(".modal-explore__close");
const exploreBtn = document.querySelector(".explore__btn");
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

reviewBtn.addEventListener("click", () => {
  modalReviewEl.classList.add("active-review");
});

closeReviewBtn.addEventListener("click", () => {
  modalReviewEl.classList.remove("active-review");
});
exploreBtn.addEventListener("click", () => {
  modalExploreEl.classList.add("active-explore");
});

closeExploreBtn.addEventListener("click", () => {
  modalExploreEl.classList.remove("active-explore");
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

// Initialize Swiper
const isLoveSwiper = new Swiper(".my-is-love-swiper", {
  slidesPerView: 1,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-is-love-pagination",
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
      slidesPerView: 3,
    },
  },
});
