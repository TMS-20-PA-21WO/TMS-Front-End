/* eslint-disable max-len */
import { getDataLocalStorage } from '../../data/local-storage';
import Pemesanan from '../../service/api/pemesanan';

class BodyAddPemesanan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
  <div class="modal fade" id="pemesanan" tabindex="-1" aria-labelledby="popuppemesanan" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content container">
        <div class="modal-header">
          <h4 class="modal-title" id="pemesananTitle">Tambah Pemesanan</h4>
          <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="pemesanan-form">
          <div class="modal-body">
            <div class="mb-3">
              <label for="paket" class="form-label">Nama Paket</label>
              <select id="paket" class="form-select" name="paket">
                <option id="1">Intimate Wedding</option>
                <option id="2">The Day Wedding Service</option>
                <option id="3">Wedding Planer Service</option>
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
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-secondary col-4" data-bs-dismis="modal"
            aria-label="Close">Cancel</button>
            <button type="submit" class="btn btn-success col-4" id="btnTambahPemesanan">Tambah Pesanan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;
    const formPemesanan = document.querySelector('#pemesanan-form');
    const selectedPaket = document.getElementById('paket');
    const responseData = await Pemesanan.getAllPemesanan();
    console.log(responseData);

    formPemesanan.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputPaket = selectedPaket.options[selectedPaket.selectedIndex].id;
      const inputDate = formPemesanan.elements.namedItem('tanggalPemesanan').value;
      const inputTelp = formPemesanan.elements.namedItem('nomorTelepon').value;
      const userId = getDataLocalStorage().userId;

      if (inputDate === responseData.data.date) {
        alert('Mohon Maaf Tanggal Sudah Anda Pesan');
        return false;
      }

      const responsePemesanan = await Pemesanan.createPemesanan(userId, inputPaket, inputDate, inputTelp);
      console.log(responsePemesanan);

      if (responsePemesanan.result === true) {
        alert('Pesanan Berhasil');
        // location.reload();
      } else {
        alert('Pesanan Gagal');
      }
    });
    // itemPaket();
    // const responseData = await Paket.getAllPaket();
    // const itemList = document.querySelector('#paket');
    // responseData.data.forEach((item) => {
    //   itemList.innerHTML = `<option id="${item.id}">${item.package_name}</option>`;
    //   console.log(item);
    //   // console.log(item.package_name);
    // });
  }
}

customElements.define('body-add-pemesanan', BodyAddPemesanan);
