/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import { getDataLocalStorage } from '../../data/local-storage';
import Pemesanan from '../../service/api/pemesanan';

class BodyEditPemesanan extends HTMLElement {
  set detail(pemesanan) {
    this._pemesanan = pemesanan;
    this.render();
  }

  render() {
    const pemesanan = this._pemesanan;
    const { id, paket, date, phone_number } = pemesanan;

    this.innerHTML = `
  <form id="edit-pemesanan-form">
    <div class="modal-body">
      <div class="mb-3">
        <label for="paket" class="form-label">Nama Paket</label>
        <select id="edit-paket" class="form-select" name="paket">
            <option id="${paket.id}">${paket.package_name}</option>
            <option id="1">Intimate Wedding</option>
            <option id="2">The Day Wedding Service</option>
            <option id="3">Wedding Planer Service</option>

        </select>
      </div>
      <div class="mb-3">
        <label for="edit-tanggalPemesanan" class="form-label">Tanggal Pemesanan</label>
        <input type="date" class="form-control" id="edit-tanggalPemesanan" name="tanggalPemesanan"
          value="${date}" required>
      </div>
      <div class="mb-3">
        <label for="edit-nomorTelepon" class="form-label">Nomor Telepon</label>
        <input type="text" class="form-control" id="edit-nomorTelepon" name="nomorTelepon"
          value="${phone_number}" required>
      </div>
    </div>
    <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-secondary col-4" data-bs-toggle="modal"
          data-bs-target="#detailPemesanan" aria-label="Close">Cancel</button>
        <button type="submit" class="btn btn-success col-4" id="btnEditPemesanan">Edit Pesanan</button>
    </div>
  </form>
  `;
    console.log(id);
    const formPemesanan = document.querySelector('#edit-pemesanan-form');
    const selectedPaket = document.getElementById('edit-paket');

    formPemesanan.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputPaket = selectedPaket.options[selectedPaket.selectedIndex].id;
      const inputDate = formPemesanan.elements.namedItem('tanggalPemesanan').value;
      const inputTelp = formPemesanan.elements.namedItem('nomorTelepon').value;
      const userId = getDataLocalStorage().userId;

      const validation = await Pemesanan.pemesananValidation(userId, inputDate);

      const dataPesanan = await Pemesanan.getPemesananById(id);

      if (validation[0] == null || validation[0].id === dataPesanan[0].id) {
        const responsePemesanan = await Pemesanan.updatePemesanan(id, userId, inputPaket, inputDate, inputTelp);

        if (responsePemesanan.result === true) {
          alert('Pesanan Berhasil Diubah');
          location.reload();
        } else {
          alert('Pesanan Gagal Diubah');
        }
      } else {
        console.log('tanggal yang anda pesan sudah dipesan');
        alert('tanggal yang anda pesan sudah dipesan');
      }
    });
  }
}

customElements.define('body-edit-pemesanan', BodyEditPemesanan);
