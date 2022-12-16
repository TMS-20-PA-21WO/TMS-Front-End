class BodyEditPemesanan extends HTMLElement {
  //   set transaction(transaction) {
  //     this._transaction = transaction;
  //     this._render();
  //   }
  connectedCallback() {
    this.render();
  }

  render() {
    // const transaction = this._transaction;
    // const {
    //   name, date, urlIcon, category,
    //   amount, colorTextAmountClass,
    // } = transactionFormated(transaction);

    this.innerHTML = `
  <form id="edit-pemesanan-form">
    <div class="mb-3">
      <label for="paket" class="form-label">Nama Paket</label>
      <select id="paket" class="form-select">
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

customElements.define('body-edit-pemesanan', BodyEditPemesanan);
