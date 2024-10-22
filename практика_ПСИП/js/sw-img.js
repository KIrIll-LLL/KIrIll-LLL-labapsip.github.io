
// свайпер 1
let swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: ".gallery-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".gallery__btn-next",
        prevEl: ".gallery__btn-prev"
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});
// свайпер 2
var swiper_2 = new Swiper(".mySwiper-2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'cube',
  });