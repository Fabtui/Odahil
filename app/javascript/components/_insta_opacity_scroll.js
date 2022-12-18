export const instaOpacityScroll = () => {
  // when bottom of window hit bottom of div backgroud go down depending on the scroll value
  const insta = document.querySelector('#insta-display')

  if (insta) {
    const instaTop = insta.offsetTop;
    // const instaBottom = instaTop + insta.offsetHeight;
    window.addEventListener('scroll', () => {
      const topWindow =  window.pageYOffset;
      const bottomWindow = window.pageYOffset + window.innerHeight
      // if (bottomWindow < instaTop) {
      // }
      // if ( topWindow > instaTop + insta.offsetHeight) {
      // }
      if (bottomWindow - 50 < instaTop || topWindow - 20 > instaTop + insta.offsetHeight) {
        insta.classList.add('swipper-hidden')
      } else {
        insta.classList.remove('swipper-hidden')
      }
    })
  }
}
