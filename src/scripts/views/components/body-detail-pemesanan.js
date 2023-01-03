import { rupiahFormat } from '../../utils/format-currency-idr';
import { formattingDateFromServer } from '../../utils/format-date';

/* eslint-disable object-curly-newline */
class BodyDetailPemesanan extends HTMLElement {
  set detail(pemesanan) {
    this._pemesanan = pemesanan;
    this.render();
  }

  render() {
    const pemesanan = this._pemesanan;
    const { user, paket, date, phone_number } = pemesanan;

    this.innerHTML = `
<table class="table table-striped">
    <tbody>
      <tr>
        <td>Username</td>
        <td>${user.username}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>${user.email}</td>
      </tr>
      <tr>
        <td>No Telepon</td>
        <td>${phone_number}</td>
      </tr>
      <tr>
        <td>Nama Paket</td>
        <td>${paket.package_name}</td>
      </tr>
      <tr>
        <td>Harga</td>
        <td>${rupiahFormat(paket.price)}</td>
      </tr>
      <tr>
        <td>Tanggal</td>
        <td>${formattingDateFromServer(date)}</td>
      </tr>
    </tbody>
</table>
`;
  }
}

customElements.define('body-detail-pemesanan', BodyDetailPemesanan);
