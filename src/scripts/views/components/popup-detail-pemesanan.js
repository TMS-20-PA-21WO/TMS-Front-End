const detailPemesanan = () => {
  const popUpDetail = document.querySelector('#pemesanan-page');
  popUpDetail.innerHTML += `
<div class="modal fade" id="detailPemesanan" tabindex="-1" aria-labelledby="popupdetailpemesanan" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content container">
      <div class="modal-header">
        <h4 class="modal-title" id="detailPemesananTitle">Detail Pemesanan</h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <body-detail-pemesanan class="modal-body"></body-detail-pemesanan>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-danger col-4" data-bs-toggle="modal"
          data-bs-target="#hapusPemesanan">Hapus</button>
        <button type="button" class="btn btn-primary col-4" data-bs-toggle="modal"
          data-bs-target="#editPemesanan">Ubah</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="hapusPemesanan" tabindex="-1" aria-labelledby="hapuspemesann" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content container">
      <div class="modal-header">
        <h4 class="modal-title" id="hapusPemesananTitle">Hapus Pemesanan</h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <span>Apakah kamu yakin akan menghapus pemesanan?</span>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-secondary col-4" data-bs-toggle="modal"
            data-bs-target="#detailPemesanan" aria-label="Close">Cancel</button>
        <button type="button" class="btn btn-danger col-4" id="btnHapusPemesanan">Hapus</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="editPemesanan" tabindex="-1" aria-labelledby="popupeditpemesanan" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content container">
      <div class="modal-header">
        <h4 class="modal-title" id="editPemesananTitle">Edit Pemesanan</h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <body-edit-pemesanan class="modal-body"></body-edit-pemesanan>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-secondary col-4" data-bs-toggle="modal"
          data-bs-target="#detailPemesanan" aria-label="Close">Cancel</button>
        <button type="button" class="btn btn-success col-4" data-bs-toggle="modal"
          data-bs-target="#editTransaksi" id="btnEditPemesanan">Pesan</button>
      </div>
    </div>
  </div>
</div>
`;
};

export default detailPemesanan;
