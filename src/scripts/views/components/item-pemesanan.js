/* eslint-disable object-curly-newline */
class ItemPemesanan extends HTMLElement {
  set dataPemesanan(pemesanan) {
    this._pemesanan = pemesanan;
    this.render();
  }

  render() {
    const pemesanan = this._pemesanan;
    const { id, paket, user, date } = pemesanan;

    this.innerHTML = `
      <button type="button" id="detailPemesanan-${id}" class="pemesanan-list btn align-item-center py-3 w-100 border" data-bs-toggle="modal"
        data-bs-target="#detailPemesanan">
        <div class="d-flex flex-row list-riwayat justify-content-center border">
          <div class="d-flex flex-column flex-fill">
            <p class="headerTransaksi text-center">${user.username}</p>
          </div>
          <div class="d-flex flex-column flex-fill">
            <p class="headerTransaksi text-center">${paket.package_name}</p>
          </div>
          <div class="d-flex flex-column flex-fill">
            <p class="headerTransaksi text-center">${date}</p>
          </div>
        </div>
      </button>
    `;
  }
}

customElements.define('item-pemesanan', ItemPemesanan);
