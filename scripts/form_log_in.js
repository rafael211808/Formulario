import { users, getInputValue, setErrorMessage, saveToStorage } from "../data/users.js";

document.querySelector('.js-submit-button')
  .addEventListener('click', (event) => {
    event.preventDefault(); // Impede o formulário de recarregar a página

    const usernameEmail = getInputValue('js-username-email-input');
    const password = getInputValue('js-password-input');

    const emptyInput = [usernameEmail, password].some((value) => {
      return value === "";
    });

    const foundUser = users.find((user) => {
      return user.username === usernameEmail || user.email === usernameEmail;
    });

    if (emptyInput) {
      const errorMessage = `<p class="error-message">
        Todos os campos devem ser preenchidos.
      </p>`;

      setErrorMessage(errorMessage);
    }

    else if (!foundUser) {
      const errorMessage = `<p class="error-message">
        Usuário ou e-mail não encontrado.
      </p>`;
      setErrorMessage(errorMessage);
    }

    else if (foundUser.password !== btoa(password)) {
      const errorMessage = `<p class="error-message">
        Senha incorreta, digite novamente.
      </p>`;

      setErrorMessage(errorMessage);
    }

    else {
      window.location.href = "main_page.html?user=" + foundUser.username;
    }
  });