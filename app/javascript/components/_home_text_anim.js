const homeTextAnim = () => {
  const textDivs = document.querySelectorAll('.profile-content-text')
  if (textDivs) {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function(){
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        scrollDownEvent()
      } else {
        scrollUpEvent()
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

    const scrollDownEvent = () => {
      textDivs.forEach(textDiv => {
        const topWindow = window.pageYOffset
        const bottomWindow = window.pageYOffset + window.innerHeight
        const middleDiv = textDiv.offsetTop + (textDiv.offsetHeight/2)
        const bottomDiv = textDiv.offsetHeight + textDiv.offsetTop
        if (bottomWindow > middleDiv) {
          textDiv.style.opacity = '1';
        }
        if (topWindow > bottomDiv) {
          textDiv.style.opacity = '0';
        }
      })
    }

    const scrollUpEvent = () => {
      textDivs.forEach(textDiv => {
        const topWindow = window.pageYOffset
        const bottomWindow = window.pageYOffset + window.innerHeight
        const topDiv = textDiv.offsetTop
        const middleDiv = textDiv.offsetTop + (textDiv.offsetHeight/2)
        const bottomDiv = textDiv.offsetHeight + textDiv.offsetTop
        if (topWindow < middleDiv) {
          textDiv.style.opacity = '1';
        }
        if (bottomWindow < topDiv) {
          textDiv.style.opacity = '0';
        }
      })
    }

  }
}

export { homeTextAnim };
