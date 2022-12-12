import CONFIG from '../../global/config';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <div id="carouselExampleControls" class="carousel slide container" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${CONFIG.CAROUSEL_ONE}" class="d-block w-100" alt="Hero Images">
      </div>
      <div class="carousel-item">
        <img src="${CONFIG.CAROUSEL_TWO}" class="d-block w-100" alt="Hero Images">
      </div>
      <div class="carousel-item">
        <img src="${CONFIG.CAROUSEL_THREE}" class="d-block w-100" alt="Hero Images">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="text-center container">
    <h1 class="display-4">BRINGING DREAMS TO LIFE</h1><br>
    <img src="${CONFIG.DIVIDER_PATH}" class="img img-fluid" alt="Hero Images">
    <p class="p">DUA SATU WEDDING PLANNER & ORGANIZER MENGGABUNGKAN GAYA DAN KEINGINAN PRIBADI ANDA UNTUK MENCIPTAKAN PESTA PERNIKAHAN YANG ELEGAN, UNIK DAN TAK TERLUPAKAN.</p>
  </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
