// Owl Carousel for Slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay : true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// AOS Animation

AOS.init();