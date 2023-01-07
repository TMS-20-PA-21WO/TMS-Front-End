import { getDataLocalStorage } from '../../data/local-storage';
import Pemesanan from '../../service/api/pemesanan';
import detailPemesanan from '../components/popup-detail-pemesanan';

const Cart = {
  async beforeRender() {
    if (getDataLocalStorage() === null) {
      alert('Anda Harus Login Terlebih Dahulu');
      location.replace('#');
    } else {
      location.replace('#/cart');
    }
  },

  async render() {
    return `
<div class="container" id="pemesanan-page">
  <h1>Pemesanan</h1>
  <button type="button" class="btn btn-success mb-5" data-bs-toggle="modal" data-bs-target="#pemesanan">
    Tambah Pemesanan
  </button>
</div>
<history-pemesanan></history-pemesanan>
<body-add-pemesanan></body-add-pemesanan>
`;
  },

  async afterRender() {
    detailPemesanan();
    console.log('Halaman Cart');

    try {
      const pemesanan = await Pemesanan.getPemesananByUser(getDataLocalStorage().userId);
      pemesanan.forEach((item) => {
        const listPemesanan = document.querySelector('#list-history-pemesanan');
        const ItemPemesanan = document.createElement('item-pemesanan');
        ItemPemesanan.dataPemesanan = item;
        listPemesanan.appendChild(ItemPemesanan);
      });

      const deletePemesanan = () => {
        const elemenBtnDelete = document.querySelector('.btnDeletePemesanan');
        elemenBtnDelete.addEventListener('click', async () => {
          const idPemesanan = parseInt(elemenBtnDelete.id.split('-')[1], [10]);

          const responseDelete = await Pemesanan.deletePemesananById(idPemesanan);

          if (responseDelete.result === true) {
            alert('Pesanan Berhasil Dihapus');
            location.reload();
          } else {
            alert('Pesanan Gagal Dihapus');
          }
        });
      };

      const itemsHistory = document.querySelectorAll('.pemesanan-list');
      itemsHistory.forEach((itemElement) => {
        itemElement.addEventListener('click', async () => {
          const idPemesanan = parseInt(itemElement.id.split('-')[1], [10]);
          const detailItem = await Pemesanan.getPemesananById(idPemesanan);
          const elementDetailPemesanan = document.querySelector('body-detail-pemesanan');
          elementDetailPemesanan.detail = detailItem[0];

          const elementEditPemesanan = document.querySelector('body-edit-pemesanan');
          elementEditPemesanan.detail = detailItem[0];

          const elementDeletePemesanan = document.querySelector('body-delete-pemesanan');
          elementDeletePemesanan.detail = detailItem[0];

          deletePemesanan();
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Cart;
