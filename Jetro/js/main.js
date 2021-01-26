$(function() {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        fade: false,
        prevArrow: '<span class="slick-arrow slick-prev"></span>',
        nextArrow: '<span class="slick-arrow slick-next"></span>',
        asNavFor: '.slider-nav'



    });


    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true
    });

    $('.header__menu-btn').on('click', function() {
        $('.header__menu ul').slideToggle();
    });

    $('.header__drop-down .drop-down').on('click', function() {
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('.drop-down__link').toggleClass('active');
    });






});