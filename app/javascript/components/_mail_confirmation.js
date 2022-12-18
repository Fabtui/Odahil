const maiConfirmation = () => {
  const constactNewContainer = document.querySelector('.contact-new-container')
  if (constactNewContainer) {
    const mailForm = document.querySelector('#contact_email')
    const mailConfirmationForm = document.querySelector('#contact_email_confirmation')
    const formButton = document.querySelector('#new-contact-btn')
    const invalidFeedback = document.querySelector('.invalid-mail')
    mailConfirmationForm.addEventListener('keyup', (e) => {
      if (mailConfirmationForm.value === mailForm.value) {
        formButton.classList.remove('disabled-btn')
        invalidFeedback.classList.add('invalid-mail-hidden')
        mailConfirmationForm.classList.remove('invalid-border')
      } else {
        invalidFeedback.classList.remove('invalid-mail-hidden')
        formButton.classList.add('disabled-btn')
        mailConfirmationForm.classList.add('invalid-border')
      }
    })
  }
}

export { maiConfirmation };
