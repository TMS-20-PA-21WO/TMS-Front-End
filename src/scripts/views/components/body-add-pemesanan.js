import Paket from '../../service/api/paket';
import itemPaket from './item-paket';
// import itemPaket from './item-paket';

class BodyAddPemesanan extends HTMLElement {
  // set paketSelected(paket) {
  //   this._paketSelected = paket;
  //   this.render();
  // }
  connectedCallback() {
    this.render();
  }

  render() {
    // const responseData = await Paket.getAllPaket();
    // responseData.data.forEach((item))

    this.innerHTML = `
<form id="pemesanan-form">
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
