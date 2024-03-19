const burgerMenu = document.querySelector(".header-burger");
const modalEl = document.querySelector(".modal");
const linkEl = document.querySelector(".modal-close");
burgerMenu.addEventListener("click", () => {
    modalEl.classList.add("active");
})
linkEl.addEventListener("click", () => {
    modalEl.classList.remove("active");
})
