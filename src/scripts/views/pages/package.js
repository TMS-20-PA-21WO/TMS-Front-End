import { getDataLocalStorage } from '../../data/local-storage';
import CONFIG from '../../global/config';

const Package = {
  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#/package');
    } else {
      location.replace('#/package');
    }
  },
  async render() {
    return `
<div class="container text-center bg-transparent">
    <h1>Layanan Yang Kami Berikan</h1><br>
    <img src="${CONFIG.DIVIDER_PATH}" class="img img-fluid" alt="Divider">
    <p style="font-size: 18px; marginTop: 20;">
        Apapun kebutuhan event anda, mulai dari lamaran, 
        pertunangan hingga acara pernikahan, 
        kami dari DUA SATU WEDDING PLANNER & ORGANIZER akan selalu memberikan layanan terbaik. 
        Kami akan meramu ide anda dengan pengalaman dan inovasi dari kami, 
        dengan begitu kami berharap sinergi ini akan menjadi kolaborasi dahsyat untuk menghidupkan mimpi anda menjadi moment terindah untuk anda kenang.
    </p><br>

    <h2 class="mb-3">Paket:</h2>
    <div class="container text-center bg-transparent">
        <div class="row">    
            <div class="col-6">
                <div class="fluid">
                    <img src="${CONFIG.PAKET_INTIMATE_WEDDING}" class="img img-fluid" alt="Intimate Wedding">
                </div>
            </div>

            <div class="col-6">
                <h3>Intimate Wedding</h3><br>
                <p>Pilihan yang tepat bagi anda untuk merayakan acara pernikahan bersama orang-orang terdekat dengan budget yang relatif murah. Segala layanan terbaik kami persembahkan untuk merayakan hari penikahan anda.</p>
            </div>

            <div class="col-6">
                <h3>The Day Wedding Service</h3><br>
                <p>Pilihan paket yang dapat membuat pernikahan anda menjadi meriah dengan menghadirkan lebih banyak orang, dari keluarga hingga sahabat. Anda akan mendapatkan pengalaman terbaik dan berkesan dalam mewujudkan mimpi anda.</p>
            </div>

            <div class="col-6">
                <img src="${CONFIG.PAKET_THEDAY_WEDDING}" class="img img-fluid" alt="The Day Wedding Service">
            </div>

            <div class="col-6">
                <img src="${CONFIG.PAKET_PLANNER_WEDDING}" class="img img-fluid" alt="Planner Wedding">
            </div>

            <div class="col-6">
                <h3>Wedding Planer Service</h3><br>
                <p>Paket yang dapat menghadirkan pengalaman terbaik dalam merayakan hari romantis anda bersama. Dengan pilihan paket ini, anda akan mendapatkan pelayanan jasa termaksimal dari kami dalam semua bidang untuk menghadirkan nuansa penikahan paling berkesan dalam hidup anda.</p>
            </div>
        </div>
    </div>
</div>


      `;
  },

  async afterRender() {
    console.log('Halaman Package');
  },
};

export default Package;
