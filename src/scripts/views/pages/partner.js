import { getDataLocalStorage } from '../../data/local-storage';
import CONFIG from '../../global/config';

const Partner = {
  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#/partner');
    } else {
      location.replace('#/partner');
    }
  },
  async render() {
    return `
<div class="container text-center bg-transparent">
    <img src="${CONFIG.MITRA_IMAGE_PATH}" class="img img-fluid" alt="Hero Images">
    <!-- <h1>Mitra Kami</h1> -->

    <h2 class="text-left">Dekorasi<h2>     
    <div class="row border">

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_DEKORASI_AERODECOR}" class="img img-fluid img-thumbnail" alt="Aerodecor">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_DEKORASI_MUSTIKA}" class="img img-fluid img-thumbnail" alt="Mustika">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_DEKORASI_SEKAR}" class="img img-fluid img-thumbnail" alt="Sekar99">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_DEKORASI_AISYA}" class="img img-fluid img-thumbnail" alt="Aisya">
                </p>
            </div>
        </div>
    </div>

    <h2 class="text-left">Make Up Artist<h2>
    <div class="row border">
        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_MAKEUP_SHAIRA}" class="img img-fluid img-thumbnail" alt="Shaira">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_MAKEUP_MALATHI}" class="img img-fluid img-thumbnail" alt="Malathi">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_MAKEUP_AISYA}" class="img img-fluid img-thumbnail" alt="Aisya">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_MAKEUP_INTAN}" class="img img-fluid img-thumbnail" alt="Intan">
                </p>
            </div>
        </div>
    </div>

    <h2 class="text-left">Photo Studio<h2>
    <div class="row border">
        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_PHOTOSTUDIO_CASSADA}" class="img img-fluid img-thumbnail" alt="Cassada">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_PHOTOSTUDIO_VINDICE}" class="img img-fluid img-thumbnail" alt="Vindice">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">   
                <p>
                    <img src="${CONFIG.PARTNER_PHOTOSTUDIO_MAMOTO}" class="img img-fluid img-thumbnail" alt="Mamoto">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                <img src="${CONFIG.PARTNER_PHOTOSTUDIO_LURBIS}" class="img img-fluid img-thumbnail" alt="Lurbis">
                </p>
            </div>
        </div>
    </div>

    <h2 class="text-left">MC<h2>
    <div class="row border">
        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_MC_MOULYA}" class="img img-fluid img-thumbnail" alt="Moulya">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_MC_BARRY}" class="img img-fluid img-thumbnail" alt="Barry">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_MC_WINDIWIJAKSANA}" class="img img-fluid img-thumbnail" alt="Windiwijaksana">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                    <img src="${CONFIG.PARTNER_MC_YOHANSAPUTRA}" class="img img-fluid img-thumbnail" alt="Yohansaputra">
                </p>
            </div>
        </div>
    </div>

    <h2 class="text-left">Music<h2>
    <div class="row border">
        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                <img src="${CONFIG.PARTNER_MUSIC_GOLDENMUSIC}" class="img img-fluid img-thumbnail" alt="Goldenmusic">
                </p>
            </div>
        </div>

        <div class="col-6 col-lg-3 p-3">
            <div class="container text-center bg-transparent">
                <p>
                <img src="${CONFIG.PARTNER_MUSIC_BOUGENVILLE}" class="img img-fluid img-thumbnail" alt="Bougenville">
                </p>
            </div>
        </div>
    </div>

</div>


      `;
  },

  async afterRender() {
    console.log('Halaman Partner');
  },
};

export default Partner;
