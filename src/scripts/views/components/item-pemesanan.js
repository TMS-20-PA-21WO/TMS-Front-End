/* eslint-disable max-len */
// import { transactionFormated } from '../../utils/data-transaction-formated';

import Pemesanan from '../../service/api/pemesanan';

class ItemPemesanan extends HTMLElement {
  // set pemesanan(pemesanan) {
  //   this._pemesanan = pemesanan;
  //   this.render();
  // }
  connectedCallback() {
    this.render();
  }

  async render() {
    const responseData = await Pemesanan.getAllPemesanan();
    responseData.data.forEach((item) => {
      this.innerHTML = `
      <button type="button" id="detailPemesanan" class="btn align-item-center py-3 px-1 w-100" data-bs-toggle="modal"
        data-bs-target="#detailPemesanan">
        <div class="d-flex flex-row list-riwayat justify-content-center">
          <div class="d-flex flex-column flex-fill">
            <p class="headerTransaksi text-center">${item.id}</p>
          </div>
          <div class="d-flex flex-column flex-fill">
            <p class="headerTransaksi text-center">${item.date}</p>
          </div>
        </div>
      </button>
    `;
    });
    console.log(responseData.data);

    // this.innerHTML = `
    //   <button type="button" id="detailPemesanan" class="btn align-item-center py-3 px-1 w-100" data-bs-toggle="modal"
    //     data-bs-target="#detailPemesanan">
    //     <div class="d-flex flex-row list-riwayat justify-content-center">
    //       <div class="d-flex flex-column flex-fill">
    //         <p class="headerTransaksi text-center">${id}</p>
    //       </div>
    //       <div class="d-flex flex-column flex-fill">
    //         <p class="headerTransaksi text-center">${paket}</p>
    //       </div>
    //     </div>
    //   </button>
    // `;
  }
}

customElements.define('item-pemesanan', ItemPemesanan);
