import CONFIG from '../../global/config';
// import member from '../../utils/member';
import login from './popup-login';
import logout from './popup-logout';
import { getDataLocalStorage, removeDataLocalStorage, saveDataToLocalStorage } from '../../data/local-storage';
import register from './popup-register';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="${CONFIG.IMAGE_LOGO_PATH}" class="img-fluid" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/package">Package</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/portofolio">Portofolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/partner">Partner</a>
        </li>
        <div id="isUser" class="d-flex"></div>
      </ul>
    </div>
  </div>
</nav>
`;

    const isUser = document.querySelector('#isUser');
    if (getDataLocalStorage() !== null) {
      isUser.innerHTML = `
          <li class="nav-item">
            <a class="nav-link" href="#/cart">Cart</a>
          </li>
          <li class="nav-item" id="logoutButton">
            <button type="button" class="btn btn-transparent" data-bs-toggle="modal" data-bs-target="#logout">
              Logout
            </button>
          </li>`;
    }
    if (getDataLocalStorage() === null) {
      isUser.innerHTML = `
          <li class="nav-item" id="loginButton">
            <button type="button" class="btn btn-transparent" data-bs-toggle="modal" data-bs-target="#login">
              Login
            </button>
          </li>
          <li class="nav-item" id="registerButton">
            <button type="button" class="btn btn-transparent" data-bs-toggle="modal" data-bs-target="#register">
              Register
            </button>
          </li>
          `;
    }
    logout();
    login();
    register();

    const btnLogout = document.querySelector('#btnLogout');
    btnLogout.addEventListener('click', () => {
      removeDataLocalStorage();
      location.reload();
    });

    const formRegister = document.querySelector('#register-form');
    formRegister.addEventListener('submit', async (e) => {
      e.preventDefault();
      // const inputEmail = formRegister.elements.namedItem('email').value;
      // const inputPassword = formRegister.elements.namedItem('password').value;
      // saveDataToLocalStorage(inputEmail, inputPassword);
      location.reload();
    });

    const formLogin = document.querySelector('#login-form');
    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputEmail = formLogin.elements.namedItem('loginemail').value;
      const inputPassword = formLogin.elements.namedItem('loginpassword').value;
      saveDataToLocalStorage(inputEmail, inputPassword);
      location.reload();
    });
  }
}

customElements.define('app-bar', AppBar);
