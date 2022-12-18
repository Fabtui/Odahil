const homeSwiper = () => {
  const swiperContainer = document.querySelector('.swiper-container')
  if (swiperContainer) {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 30,
      effect: "fade",
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    });
  }
}

export { homeSwiper }
