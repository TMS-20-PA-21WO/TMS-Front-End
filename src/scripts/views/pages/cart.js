import { getDataLocalStorage } from '../../data/local-storage';
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
`;
  },

  async afterRender() {
    pemesanan();
    console.log('Halaman Cart');
  },
};

export default Cart;
