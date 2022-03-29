const swiper = new Swiper('.slider', {
    initialSlide: 2,
    speed: 400,
    loop: true,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
});

const testimonialsSlider = new Swiper('.testimonials-slider', {
    speed: 400,
    loop: true,
    spaceBetween: 1,
    navigation: {
        nextEl: '.testimonials-slider__right',
        prevEl: '.testimonials-slider__left',
    },
});
