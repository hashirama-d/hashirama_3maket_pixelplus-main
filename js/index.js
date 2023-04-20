const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list")
const modalLink = document.querySelector(".header__feedback-link");
const categoriesList = document.querySelectorAll(".catalog__category");
//  Тригер кнопки для бургер-меню
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list_enabled");
    menuBtn.classList.toggle("menu__btn_enabled");
});

//  Налаштування слайдера
$(document).ready(function(){
    $('.slider__inner').slick({
        fade: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});

//  Зміна розміру контейнера з слайдером при зменшенні розміру екрана на менше ніж 1400 пікселів
$(window).on('load resize', function() {
    var screenWidth = $(window).width();
    var containerWidth = Math.min(screenWidth, 1400); // Limit to 1400px
    $('.slider__inner').css('max-width', containerWidth + 'px');
});

modalLink.addEventListener("click", () => {
    // Налаштування вікна зворотнього зв'язку
    $("#feedback").modal({
        fadeDuration: 500
    });
});

categoriesList.forEach( category => {
    category.addEventListener("click", () => {
        categoriesList.forEach( category => {
            category.classList.remove("catalog__category_active");
        });
        category.classList.toggle("catalog__category_active");
    });
});

categoriesList.forEach( category => {
    category.addEventListener("mouseover", () => {
        categoriesList.forEach( category => {
            category.classList.remove("catalog__category_active");
        });
        category.classList.toggle("catalog__category_active");
    });
});