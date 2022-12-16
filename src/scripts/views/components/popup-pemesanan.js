const pemesanan = () => {
  const popUpPemesanan = document.querySelector('#pemesanan-page');
  popUpPemesanan.innerHTML += `
<div class="modal fade" id="pemesanan" tabindex="-1" aria-labelledby="popuppemesanan" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content container">
      <div class="modal-header">
        <h4 class="modal-title" id="pemesananTitle">Tambah Pemesanan</h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <body-add-pemesanan class="modal-body"></body-add-pemesanan>
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
};

export default pemesanan;
