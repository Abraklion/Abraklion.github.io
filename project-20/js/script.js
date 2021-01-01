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

    // Вызов карту по клику
    var handler = function () {
        this.innerHTML = '<div class="map__block"><div class="map__header"><svg class="map__svg"><use xlink:href="img/symbol/sprite.svg#pin"></use></svg><h2 class="map__title">Open map</h2></div><div class="map__content"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2303.305256611305!2d55.95504651618541!3d54.739434280294546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d93a14deed8e07%3A0xad1d1a2aa95f880f!2z0KHQsNC70LDQstCw0YIg0K7Qu9Cw0LXQsg!5e0!3m2!1sru!2sru!4v1609317821096!5m2!1sru!2sru" aria-hidden="false"></iframe></div></div>';
    };
    document.querySelector('.map__wrapper').addEventListener('click', function (e) { this.removeEventListener('click', handler, false); handler.apply(this, arguments); } , false);

});