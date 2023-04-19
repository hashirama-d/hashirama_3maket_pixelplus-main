const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list")
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list_enabled");
    menuBtn.classList.toggle("menu__btn_enabled");
});