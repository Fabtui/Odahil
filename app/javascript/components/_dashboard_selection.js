const dashboardSelection = () => {
  const tattoosButton = document.querySelector('.select-tattoos');
  const artsButton = document.querySelector('.select-arts');
  const tattoosSection = document.querySelector('.dashboard-tattoos');
  const artsSection = document.querySelector('.dashboard-arts');

  if (tattoosButton) {
    tattoosButton.addEventListener('click', () => {
      tattoosSection.classList.remove('dashboard-hidden');
      artsSection.classList.add('dashboard-hidden');
      tattoosButton.classList.add('active');
      artsButton.classList.remove('active');
    })
  }

  if (artsButton) {
    artsButton.addEventListener('click', () => {
      tattoosSection.classList.add('dashboard-hidden');
      artsSection.classList.remove('dashboard-hidden');
      tattoosButton.classList.remove('active');
      artsButton.classList.add('active');
    })
  }
}

export { dashboardSelection }
