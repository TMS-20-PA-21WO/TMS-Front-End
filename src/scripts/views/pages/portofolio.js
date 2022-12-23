import { getDataLocalStorage } from '../../data/local-storage';
import CONFIG from '../../global/config';

const Portofolio = {
  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#/portofolio');
    } else {
      location.replace('#/portofolio');
    }
  },
  async render() {
    return `
    <div class="container text-center bg-transparent">
      <h1>Event Portofolio</h1>
      <img src="${CONFIG.DIVIDER_PATH}" alt="">
      <h3>Great Things We Have Done</h3>
      <br />

      <div class="row">
        <div class="col-sm-4">
          <p>
            <img src="${CONFIG.PORTOFOLIO_WIDIS_ANGGA}" class="img-fluid" alt="Widis & Angga">
          </p>
          <p>Widis & Angga</p>

          <p>
            <img src="${CONFIG.PORTOFOLIO_ANISA_RIZKY}" alt="Anisa & Rizky" class="img img-fluid">
          </p>
          <p>Anisa & Rizky</p>
        </div>

        <div class="col-sm-8">
          <!-- <div class="jumbotron text-center bg-transparent"> -->
          <p>
            <img src="${CONFIG.PORTOFOLIO_TEGUH_RISNA}" alt="Risna & Teguh" class="img img-fluid">
          </p>
          <p>Risna & Teguh</p>
          <div class="row">
            <div class="col-6">
              <div class="wrapper">
                <p>
                  <img src="${CONFIG.PORTOFOLIO_MUTIARA_ARI}" alt="Mutiara & Ari" class="img img-fluid">
                </p>
                <p>Mutiara & Ari</p>
              </div>
            </div>

            <div class="col-6">
              <div class="wrapper">
                <p>
                    <img src="${CONFIG.PORTOFOLIO_DESTY_DODI}" alt="Desty & Dodi" class="img img-fluid">
                </p>
                <p>Desty & Dodi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <!-- <div class="jumbotron text-center bg-transparent"> -->
          <img src="${CONFIG.PORTOFOLIO_ARIESA_ARDI}" alt="Ariesa & Ardi" class="img img-fluid">
          <p>Ariesa & Ardi</p>

          <img src="${CONFIG.PORTOFOLIO_NADYA_FARIZ}" alt="Nadya & Fariz" class="img img-fluid">

          <p>Nadya & Fariz</p>
        </div>

        <div class="col-lg-6">
          <!-- <div class="jumbotron text-center bg-transparent"> -->
          <div class="row">
            <div class="col-6">
              <p>
                <img src="${CONFIG.PORTOFOLIO_GINA_FAHMI}" alt="Gina & Fahmi" class="img img-fluid">
              </p>
              <p>Gina & Fahmi</p>
            </div>
            <div class="col-6">
              <p>
                <img src="${CONFIG.PORTOFOLIO_AYU_RANDI}" alt="Ayu & Randi" class="img img-fluid">
              </p>
              <p>Ayu & Randi</p>
            </div>
          </div>

          <p>
            <img src="${CONFIG.PORTOFOLIO_RIVI_FERDI}" alt="Rivi & Ferdi" class="img img-fluid">
          </p>
          <p>Rivi & Ferdi</p>
        </div>
      </div>
  </div>
  
  
        `;
  },

  async afterRender() {
    console.log('Halaman Portofolio');
  },
};

export default Portofolio;
