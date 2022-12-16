// import detailTransaksi from './pop-upDetailTransaksi';

class HistoryPemesanan extends HTMLElement {
  //   set dompetSelected(dompet) {
  //     this._dompetSelected = dompet;
  //     this._render();
  //   }
  connectedCallback() {
    this.render();
  }

  render() {
    // const dompet = this._dompetSelected;

    this.innerHTML = `
      <section class="container d-flex justify-content-center mb-5 px-0">
        <div class="riwayat-pemesanan bg-warning text-center">
          <p class="history-title mb-1">Riwayat Pemesanan</p>
          <div class="text-center" id="list-history-pemesanan"></div>
        </div>
      </section>
  `;
  }
}

customElements.define('history-pemesanan', HistoryPemesanan);
