export const users = JSON.parse(localStorage.getItem('users')) || []

export function getInputValue (className) {
  const inputElement = document.querySelector(`.${className}`).value;
  return inputElement
}

export function setErrorMessage (errorMessage) {
  document.querySelector('.js-error-message-container')
    .innerHTML = errorMessage;

  document.querySelector('.form').reset();
}

export function saveToStorage () {
  localStorage.setItem('users', JSON.stringify(users))
}