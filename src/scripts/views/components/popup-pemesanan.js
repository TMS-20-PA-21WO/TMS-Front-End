const pemesanan = () => {
  const popUpPemesanan = document.querySelector('#pemesanan-page');
  popUpPemesanan.innerHTML += `
    <div class="modal fade" id="pemesanan" tabindex="-1" aria-labelledby="popuppemesanan" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Pemesanan</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="pemesanan-form">
              <div class="modal-body">
                  <div class="mb-3">
                    <label for="paket" class="form-label">Nama Paket</label>
                    <select id="paket" class="form-select">
                        <option>Paket 1</option>
                        <option>Paket 2</option>
                        <option>Paket 3</option>
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
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" id="btnTambahPesan" class="btn btn-success">Tambah Pemesanan</button>
              </div>
          </form>
        </div>
      </div>
    </div>
      `;
};

export default pemesanan;
