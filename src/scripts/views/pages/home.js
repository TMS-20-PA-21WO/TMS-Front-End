import { getDataLocalStorage } from '../../data/local-storage';
// import Auth from '../../service/api/auth';
// import Paket from '../../service/api/paket';
// import User from '../../service/api/user';
import CONFIG from '../../global/config';

const Home = {
  init({ id, package_name, price }) {
    this._id = id;
    this._package_name = package_name;
    this._price = price;
  },

  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#');
      // location.reload();
    } else {
      location.replace('#');
    }
    // Paket.getAllPaket();
    // Paket.getPaketByID(2);
    // Auth.login();
  },
  async render() {
    return `
    <hero-element></hero-element>
    <div class="body-content">

    <div class="row">
        <div class="col-lg-4">
            <h3>Make Your Plan</h3>
  
            <p>
              <img src="${CONFIG.HOME_MAKE}" alt="Make" class="img-fluid">
            </p>
  
            <p><a class="btn btn-outline-secondary" href="">Making Plan &raquo;</a></p>
        </div>
        <div class="col-lg-4">
            <h3>Choose Your Venue</h3>
  
            <p>
              <img src="${CONFIG.HOME_CHOOSE}" alt="Choose" class="img-fluid">
            </p>
  
            <p><a class="btn btn-outline-secondary" href="">Choosing Venue &raquo;</a></p>
        </div>
        <div class="col-lg-4">
            <h3>Create Your Event</h3>
  
            <p>
              <img src="${CONFIG.HOME_CREATE}" alt="Create" class="img-fluid">
            </p>
  
            <p><a class="btn btn-outline-secondary" href="">Creating Event &raquo;</a></p>
        </div>
    </div>
  
    <div class="row" style="margin: 30px 0px;">
        <div class="col-5">
  
            <p>
              <img src="${CONFIG.HOME_WHYUS}" alt="Make" class="img-fluid">
            </p>
        </div>
        <div class="col-md-7 col-sm-4">
            <br><br><br><br><br>
            <h2 style="font-size: 40px">Mengapa Memilih Kami?</h2>
            <p style="font-size: 25px;">Kami menggunakan pendekatan inovatif dan modern sesuai dengan perspektif klien yang dipersonalisasikan pada perancangan dan produksi event, mulai dari menemukan tempat yang sempurna hingga mengucapkan selamat tinggal kepada tamu terakhir saat acara berakhir.</p>
        </div>
    </div>
  
    <h3 style="color: orange;">Testimonials</h3>
    <h2>Testimoni Klien</h2>
    <div class="row">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <img class="avatar" src="${CONFIG.PORTOFOLIO_GINA_FAHMI}" alt="Testimoni Gina & Fahmi" height="300vh">
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


      `;
  },

  async afterRender() {
    console.log('Halaman Home');

    // const responseData = await User.getAllUser();
    // responseData.data.forEach((item) => {
    //   const itemList = document.querySelector('#pemesanan-page');
    //   // itemList.innerHTML += `<option id="${item.id}">${item.package_name}</option>`;
    //   console.log(item);
    //   // console.log(item.package_name);
    // });
  },
};

export default Home;
