const alertClose = () => {
  const alert = document.querySelector("#alert-item");

  if (alert) {
    const closeButton = document.querySelector("#alert-item button");
    closeButton.addEventListener('click', () => {
      alert.parentNode.removeChild(alert);
      return false;
    })
  }
};

export { alertClose };
