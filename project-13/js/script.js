$(document).ready(function () {
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false
            },
            480:{
                items:1
            }
        }
    })

    $('.carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2
            },
            680:{
                items:3
            },
            1024:{
                items:4
            }
        }
    })

    $('.carousel-blog').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2
            }
        }
    })

    $('.carousel-products').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1,
            },
            680:{
                items:2
            },
            1024:{
                items:3
            }
        }
    })
});