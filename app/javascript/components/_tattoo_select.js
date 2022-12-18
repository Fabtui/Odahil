export const tattooSelect = () => {
  const styleButtons = document.querySelectorAll('.style-button')
  if (styleButtons) {
    const tattooCards = document.querySelectorAll('.tattoo-card')
    styleButtons.forEach(styleButton => {
      styleButton.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('active-button')) {
          e.currentTarget.classList.remove('active-button')
          showTattoos()
        } else {
          e.currentTarget.classList.add('active-button')
          showTattoos()
        }
      })
    })

    const showTattoos = () => {
      const selectedStyles = document.querySelectorAll('.active-button')
      let styles = []
      selectedStyles.forEach(selectedStyle => {
        styles.push(selectedStyle.innerText.replace(/\s+/g, ''))
      });
      tattooCards.forEach(tattooCard => {
        const tattooStyles = tattooCard.dataset.styles.split('/')
        if (tattooStyles.some(r=> styles.indexOf(r) >= 0)) {
          tattooCard.classList.remove('tattoo-hidden')
        } else {
          tattooCard.classList.add('tattoo-hidden')
        }
      })
      // show all tattoos if no filter selected
      const active = document.querySelector('.active-button')
      if (!active) {
        tattooCards.forEach(tattooCard => {
          tattooCard.classList.remove('tattoo-hidden')
        })
      }
    }

    // deploy filters when click on filter button
    const filterButton = document.querySelector('.filter-button')
    const filterContainer = document.querySelector('.filter-container')
    if (filterButton) {
      filterButton.addEventListener('click', () => {
        filterContainer.classList.toggle('hide-filter')
      })
    }
  }
}
