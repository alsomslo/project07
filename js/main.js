$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })


    $('.mainslide').slick({
        autoplay: 5000,
        speed: 500,
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        cssEase: 'linear',

    });

    const roomSlide = new Swiper('.room_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,

        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
            dragSize: 150,
            hide: false,
        },
        autoplay: {


        },

    })
    $('.mainroom .arrows .left').on('click', function () {
        roomSlide.slidePrev();
    });
    $('.mainroom .arrows .right').on('click', function () {
        roomSlide.slideNext();
    });

})