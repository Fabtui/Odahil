const articleSwipper = () => {
  const swiperContainer = document.querySelector(".article-card-swiper");
  if (swiperContainer) {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      spaceBetween: 30,
      effect: "fade",
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    });
  }
};

export { articleSwipper };
