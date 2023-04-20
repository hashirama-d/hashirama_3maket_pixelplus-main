const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list")

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