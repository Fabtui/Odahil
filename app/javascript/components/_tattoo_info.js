const tattooInfo = () => {
  const tattooCards = document.querySelectorAll('.tattoo-card-image');

  if (tattooCards) {
    tattooCards.forEach(tattooCard => {
      tattooCard.addEventListener('mouseenter', (e) => {
        tattooCard.classList.remove('grey-filter')
        const info = document.querySelector(`#info-${tattooCard.dataset.id}`)
        info.classList.add('info-over-image')
      })
      tattooCard.addEventListener('mouseleave', (e) => {
        tattooCard.classList.add('grey-filter')
        const info = document.querySelector(`#info-${tattooCard.dataset.id}`)
        info.classList.remove('info-over-image')
      })
    });
  }
}

export { tattooInfo }
