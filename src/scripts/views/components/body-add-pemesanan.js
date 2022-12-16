import itemPaket from './item-paket';

class BodyAddPemesanan extends HTMLElement {
  // set paketSelected(paket) {
  //   this._paketSelected = paket;
  //   this.render();
  // }
  connectedCallback() {
    this.render();
  }

  render() {
    // const paket = this._paketSelected;
    // const { id, name, price } = paket;

    this.innerHTML = `
<form id="pemesanan-form">
  <div class="mb-3">
    <label for="paket" class="form-label">Nama Paket</label>
    <select id="paket" class="form-select">
      ${itemPaket}
    </select>
  </div>
  <div class="mb-3">
    <label for="tanggalPemesanan" class="form-label">Tanggal Pemesanan</label>
    <input type="date" class="form-control" id="tanggalPemesanan" name="tanggalPemesanan"
      required>
  </div>
  <div class="mb-3">
    <label for="nomorTelepon" class="form-label">Nomor Telepon</label>
    <input type="text" class="form-control" id="nomorTelepon" name="nomorTelepon"
      required>
  </div>
</form>
`;
  }
}

customElements.define('body-add-pemesanan', BodyAddPemesanan);
