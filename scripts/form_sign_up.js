import { users, getInputValue, setErrorMessage, saveToStorage, } from "../data/users.js";

document.querySelector('.js-submit-button')
  .addEventListener('click', (event) => {
    event.preventDefault(); // Impede o formulário de recarregar a página

    const name = getInputValue('js-name-input');
    const username = getInputValue('js-username-input');
    const email = getInputValue('js-email-input');
    const password = getInputValue('js-password-input');
    const confirmation = getInputValue('js-confirmation-input');

    const emptyInput = [name, username, email, password, confirmation].some((value) => {
      return value === "";
    });

    const foundUser = users.find((user) => {
      return user.username === username || user.email === email;
    });

    if (emptyInput) {
      const errorMessage = `<p class="error-message">
        Todos os campos devem ser preenchidos.
      </p>`;

      setErrorMessage(errorMessage);
    }
    
    else if (password !== confirmation) {
      const errorMessage = `<p class="error-message">
        Os campos Senha e Confirmar Senha devem ser iguais, digite novamente.
      </p>`;

      setErrorMessage(errorMessage);
    } 

    else if (foundUser) {
      const errorMessage = `<p class="error-message">
        Nome de Usuário ou E-mail já existe, tente novamente ou faça o login.
      </p>`;

      setErrorMessage(errorMessage);
    }

    else {
      const userData = {
        name: name,
        username: username,
        email: email,
        password: btoa(password),
      };
      users.push(userData);

      saveToStorage();

      window.location.href = "main_page.html?user=" + username;
    }
  });