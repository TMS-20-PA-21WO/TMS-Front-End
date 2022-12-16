/* eslint-disable max-len */
import { getDataLocalStorage } from '../../data/local-storage';
// import Paket from '../../service/api/paket';
// import Pemesanan from '../../service/api/pemesanan';
// import User from '../../service/api/user';
import detailPemesanan from '../components/popup-detail-pemesanan';
import pemesanan from '../components/popup-pemesanan';

const Cart = {
  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#');
      // location.reload();
    } else {
      location.replace('#/cart');
    }
  },

  async render() {
    return `
<div class="container" id="pemesanan-page">
  <h1>Pemesanan</h1>
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#pemesanan">
    Tambah Pemesanan
  </button>
</div>
<history-pemesanan></history-pemesanan>
`;
  },

  async afterRender() {
    detailPemesanan();
    await pemesanan();
    console.log('Halaman Cart');
    const listPemesanan = document.querySelector('#list-history-pemesanan');
    const ItemPemesanan = document.createElement('item-pemesanan');
    listPemesanan.appendChild(ItemPemesanan);
  },
};

export default Cart;
