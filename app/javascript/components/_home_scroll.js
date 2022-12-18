export const titleScroll = () => {
  const title = document.querySelector('#home-title')
  if (title) {
    const homeBanner = document.querySelector('.home-page-container')
    title.addEventListener('click', () => {
      window.scroll({
          top: homeBanner.offsetHeight + 50,
          behavior: "smooth"
        });
    });
  }
}

export const logoScroll = () => {
  const logo = document.querySelector('#home-logo-button')
    if (logo) {
      logo.addEventListener('click', () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
      });
      })
    }
}
