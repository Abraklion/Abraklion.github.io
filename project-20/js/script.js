$(document).ready(function () {

    // Активный пункт меню слайдера
    const navLink = $('.slider__wrapper-nav a').on('click', function() {
        navLink.not(this).removeClass('slider__link--active');
        $(this).addClass('slider__link--active');
    });

    // Слайдер первого экрана
    $('.slider__carousel').owlCarousel({
        loop:true,
        margin:0,
        navText: [],
        mouseDrag:false,
        URLhashListener:true,
        autoplayHoverPause:true,
        // startPosition: 'URLHash',
        items:1,
        responsive:{
            0:{
                dots: true,
                mouseDrag:true
            },
            769:{
                dots:false
            }
        }
    });

    // Слайдер компании
    $('.company__wrapper').owlCarousel({
        loop:true,
        margin:60,
        nav:false,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:2,
                margin:0,
                dots: true
            },
            480:{
                items:3,
                margin:10,
                dots: true
            },
            600:{
                items:4,
                margin:20,
                dots: true
            },
            768:{
                items:5,
                dots: true
            },
            1024:{
                items:6
            }
        }
    })

    // Слайдер отзывы клиентов
    $('.reviews__carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: [],
        items:1
    })

    // Фокус меню
    $('.menu__item a').on('focus', function (e) {
        $(this).parents('.menu__item').addClass('menu__item--active');
    });

    $('.menu__item a').on('blur', function (e) {
        $(this).parents('.menu__item').removeClass('menu__item--active');
    });

    // Фокус команда
    $('.element a').on('focus', function (e) {
        $(this).parents('.element').addClass('element--focus');
    });

    $('.element a').on('blur', function (e) {
        $(this).parents('.element').removeClass('element--focus');
    });

});