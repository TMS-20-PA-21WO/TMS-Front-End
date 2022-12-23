class BodyDeletePemesanan extends HTMLElement {
  set detail(pemesanan) {
    this._pemesanan = pemesanan;
    this.render();
  }

  render() {
    const pemesanan = this._pemesanan;

    this.innerHTML = `
<button type="button" class="btn btn-secondary col-4" data-bs-toggle="modal"
    data-bs-target="#detailPemesanan" aria-label="Close">Cancel</button>
<button type="button" class="btn btn-danger col-4 btnDeletePemesanan" id="btnHapusPemesanan-${pemesanan.id}">Hapus</button>
  `;
  }
}

customElements.define('body-delete-pemesanan', BodyDeletePemesanan);
