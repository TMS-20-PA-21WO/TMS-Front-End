class BodyDetailPemesanan extends HTMLElement {
  //   set transaction(transaction) {
  //     this._transaction = transaction;
  //     this._render();
  //   }
  connectedCallback() {
    this.render();
  }

  render() {
    // const transaction = this._transaction;
    // const {
    //   name, date, urlIcon, category,
    //   amount, colorTextAmountClass,
    // } = transactionFormated(transaction);

    this.innerHTML = `
<table class="table table-striped">
    <tbody>
      <tr>
        <td>Username</td>
        <td>Otto</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>Thornton</td>
      </tr>
      <tr>
        <td>No Telepon</td>
        <td>1111111</td>
      </tr>
      <tr>
        <td>Nama Paket</td>
        <td>1111111</td>
      </tr>
      <tr>
        <td>Harga</td>
        <td>1111111</td>
      </tr>
      <tr>
        <td>Tanggal</td>
        <td>1111111</td>
      </tr>
    </tbody>
</table>
`;
  }
}

customElements.define('body-detail-pemesanan', BodyDetailPemesanan);
