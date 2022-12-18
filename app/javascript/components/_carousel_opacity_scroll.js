const carouselOpacityScroll = () => {
  // when bottom of window hit bottom of div backgroud go down depending on the scroll value
  const carousel = document.querySelector('.swiper-container')

  if (carousel) {
    const carouselTop = carousel.offsetTop;
    const carouselBottom = carouselTop + carousel.offsetHeight;
    window.addEventListener('scroll', () => {
      const topWindow =  window.pageYOffset;
      const bottomWindow = window.pageYOffset + window.innerHeight
      if (bottomWindow - 50 < carouselTop || topWindow + 50 > carouselBottom) {
        carousel.classList.add('swipper-hidden')
      } else {
        carousel.classList.remove('swipper-hidden')
      }
    })
  }
}

export { carouselOpacityScroll };
