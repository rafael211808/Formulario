import { users } from "../data/users.js";

const params = new URLSearchParams(window.location.search);
const usernameLogado = params.get('user');

// Busca diretamente o objeto do usuário logado
const userLogado = users.find((user) => {
  return user.username === usernameLogado;
});

if (userLogado) {
  document.querySelector('main').innerHTML = `
    <h1>Bem-vindo de volta, ${userLogado.name}!</h1>
    <div class="info-container">
      <p>Suas informações:</p>
      <p>Nome de Usuário - ${userLogado.username}</p>
      <p>E-mail - ${userLogado.email}</p>
      <button class="logout-button js-logout-button">Sair</button>
    </div>
  `;

  const logoutButton = document.querySelector('.js-logout-button')
    .addEventListener('click', () => {
      window.location.href = 'form_log_in.html';
    });
} else {
  document.querySelector('main').innerHTML = `<h1 class="user-not-found">Usuário não encontrado.</h1>`;
}