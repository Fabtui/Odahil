const backImageScroll = () => {
  // when bottom of window hit bottom of div backgroud go down depending on the scroll value
  const backImage = document.querySelector('.back-image')

  if (backImage) {
    const backImageTop = backImage.offsetTop;
    const backImageBottom = backImageTop + backImage.offsetHeight;
    const windowHeight = window.innerHeight;
    window.addEventListener('scroll', (e) => {
      const topWindow =  window.pageYOffset;
      const bottomWindow = window.pageYOffset + window.innerHeight
      let offSet = -(((backImageBottom - bottomWindow)* 1.7 / windowHeight) * 100)
      if (bottomWindow > backImageBottom + 10 ) {
        if (topWindow + 30 > backImageTop) {
          return
        } else {
          backImage.style.backgroundPositionY = (`${100 - offSet}%`);
        }
      }
    })
  }
}

export { backImageScroll };
