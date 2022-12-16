import Paket from '../../service/api/paket';

const pemesanan = async () => {
  const popUpPemesanan = document.querySelector('#pemesanan-page');
  popUpPemesanan.innerHTML += `
<div class="modal fade" id="pemesanan" tabindex="-1" aria-labelledby="popuppemesanan" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content container">
      <div class="modal-header">
        <h4 class="modal-title" id="pemesananTitle">Tambah Pemesanan</h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="pemesanan-form">
          <div class="mb-3">
            <label for="paket" class="form-label">Nama Paket</label>
            <select id="paket" class="form-select">
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
        </form>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-secondary col-4" data-bs-dismis="modal"
            aria-label="Close">Cancel</button>
        <button type="button" class="btn btn-success col-4" data-bs-toggle="modal"
          data-bs-target="#editTransaksi" id="btnTambahPemesanan">Pesan</button>
      </div>
    </div>
  </div>
</div>
      `;
  const responseData = await Paket.getAllPaket();
  responseData.data.forEach((item) => {
    const itemList = document.querySelector('#paket');
    itemList.innerHTML += `<option id="${item.id}">${item.package_name}</option>`;
    // console.log(item);
    // console.log(item.package_name);
  });
};

export default pemesanan;
