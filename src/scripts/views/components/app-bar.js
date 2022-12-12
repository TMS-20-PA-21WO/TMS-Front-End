import CONFIG from '../../global/config';

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
        <div id="isUser"></div>
      </ul>
    </div>
  </div>
</nav>
`;

    const isUser = document.querySelector('#isUser');
    const user = 2;
    if (user === 1) {
      isUser.innerHTML = `
        <li class="nav-item">
          <a class="nav-link" href="#/login">Login</a>
        </li>
        `;
    } else {
      isUser.innerHTML = `
        <li class="nav-item">
          <a class="nav-link" href="#/logout">Logout</a>
        </li>
        `;
    }
  }
}

customElements.define('app-bar', AppBar);
