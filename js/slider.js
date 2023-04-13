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

$(window).on('load resize', function() {
    var screenWidth = $(window).width();
    var containerWidth = Math.min(screenWidth, 1400); // Limit to 1400px
    $('.slider').css('max-width', containerWidth + 'px');
});