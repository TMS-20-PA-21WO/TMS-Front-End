import { getDataLocalStorage } from '../../data/local-storage';
import CONFIG from '../../global/config';

const Home = {
  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#');
    } else {
      location.replace('#');
    }
  },
  async render() {
    return `
  <hero-element></hero-element>
  <div class="body-content container mt-5">
    <div class="row mb-5">
        <div class="col-lg-4">
            <h3>Make Your Plan</h3>
            <img src="${CONFIG.HOME_MAKE}" alt="Make" class="img-fluid">
            <p><a class="btn btn-outline-secondary" href="">Making Plan &raquo;</a></p>
        </div>
        <div class="col-lg-4">
            <h3>Choose Your Venue</h3>
            <img src="${CONFIG.HOME_CHOOSE}" alt="Choose" class="img-fluid">
            <p><a class="btn btn-outline-secondary" href="">Choosing Venue &raquo;</a></p>
        </div>
        <div class="col-lg-4">
            <h3>Create Your Event</h3>
            <img src="${CONFIG.HOME_CREATE}" alt="Create" class="img-fluid">
            <p><a class="btn btn-outline-secondary" href="">Creating Event &raquo;</a></p>
        </div>
    </div>
    
    <div class="mb-5">
      <div class="row">
          <div class="col-md-5 col-sm-12">
              <img src="${CONFIG.HOME_WHYUS}" alt="Make" class="img-fluid">
          </div>
          <div class="col-md-7 col-sm-12">
              <h2 style="font-size: 40px">Mengapa Memilih Kami?</h2>
              <p style="font-size: 25px;">Kami menggunakan pendekatan inovatif dan modern sesuai dengan perspektif klien yang dipersonalisasikan pada perancangan dan produksi event, mulai dari menemukan tempat yang sempurna hingga mengucapkan selamat tinggal kepada tamu terakhir saat acara berakhir.</p>
          </div>
      </div>
    </div>
  
    <div class="">
      <h3 style="color: orange;">Testimonials</h3>
      <h2>Testimoni Klien</h2>
      <div class="row">
          <div class="col-sm-6">
              <div class="card">
                  <div class="card-body">
                      <div class="row">
                          <div class="col-sm-6">
                              <img class="avatar" src="${CONFIG.PORTOFOLIO_GINA_FAHMI}" alt="Testimoni Gina & Fahmi" height="300vh text-center">
                          </div>
                          <div class="col-sm-6, container text-center bg-transparent" style="">
                              <h4 class="card-title">Gina & Fahmi</h4>
                              <p class="card-text">lorem</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-sm-6">
              <div class="card">
                  <div class="card-body">
                      <div class="row">
                          <div class="col-sm-6">
                              <img class="avatar" src="${CONFIG.PORTOFOLIO_AYU_RANDI}" alt="Testimoni Ayu&Randi" height="300vh">
                          </div>
                          <div class="col-sm-6, container text-center bg-transparent" style="">
                              <h4 class="card-title">Ayu & Randi</h4>
                              <p class="card-text">lorem</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
      `;
  },

  async afterRender() {
    console.log('Halaman Home');
  },
};

export default Home;
