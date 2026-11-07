# 📋 Sistema de Cadastro e Login (Formulário)

Um projeto web simples e interativo desenvolvido com **HTML5**, **CSS3** e **JavaScript moderno (ES6)** para gerenciamento básico de usuários,
com persistência de dados utilizando o `localStorage` do navegador.

---

## 🚀 Funcionalidades

* **Criar Conta (`form_sign_up.html`):** 
  * Cadastro de novos usuários informando Nome, Nome de Usuário, E-mail e Senha.
  * Validação de campos obrigatórios e confirmação de senha.
  * Verificação automática para evitar duplicidade de e-mail ou nome de usuário.
* **Fazer Login (`form_log_in.html`):**
  * Autenticação utilizando Nome de Usuário ou E-mail e Senha.
  * Mensagens de erro dinâmicas em caso de credenciais incorretas ou campos vazios.
* **Página Inicial (`main_page.html`):**
  * Painel de boas-vindas personalizado que exibe as informações do usuário autenticado após o login.
  * Opção de encerramento de sessão (Logout).
* **Persistência de Dados (`users.js`):**
  * Armazenamento e resgate dos dados dos usuários direto no navegador via `localStorage`.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica das páginas.
* **CSS3:** Estilização customizada, flexbox e design responsivo.
* **JavaScript (ES6 Modules):** Lógica de validação, manipulação do DOM e gerenciamento de estado dos usuários.

---

## 📂 Estrutura de Pastas

```text
Formulário/
│
├── form_log_in.html       # Página de Login
├── form_sign_up.html      # Página de Cadastro
├── main_page.html         # Página Inicial / Painel do Usuário
│
├── styles/
│   ├── header.css         # Estilos globais do cabeçalho
│   ├── formulario.css     # Estilos dos formulários (Login/Cadastro)
│   └── main_page.css      # Estilos da página principal
│
└── scripts/
    ├── form_log_in.js     # Lógica de autenticação e validação de login
    ├── form_sign_up.js    # Lógica de registro de novos usuários
    ├── main_page.js       # Lógica de exibição de dados do usuário logado
    └── users.js           # Funções utilitárias e gerenciamento de armazenamento
```

## ⚠️ Nota de Segurança
* **Aviso:** Este projeto utiliza a função nativa btoa() apenas para uma codificação básica de senha para fins educacionais e de estudo. Em aplicações reais de produção, utilize bibliotecas de criptografia robustas (como bcrypt) e um backend seguro.
