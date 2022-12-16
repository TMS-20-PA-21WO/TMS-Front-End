// import { transactionFormated } from '../../utils/data-transaction-formated';

class ItemPemesanan extends HTMLElement {
  //   set transactions(transactions) {
  //     this._transactions = transactions;
  //     this._render();
  //   }
  connectedCallback() {
    this.render();
  }

  render() {
    // const transaction = this._transactions;
    // const { name, date, urlIcon, category, amount, colorTextAmountClass } = transactionFormated(transaction);

    this.innerHTML = `
      <button type="button" id="detailPemesanan" class="btn align-item-center py-3 px-1 w-100" data-bs-toggle="modal"
        data-bs-target="#detailPemesanan">
        <div class="d-flex flex-row list-riwayat justify-content-center">
          <div class="d-flex flex-column flex-fill">
            <p class="headerTransaksi text-center">Id Pemesanan</p>
          </div>
          <div class="d-flex flex-column flex-fill">
            <p class="headerTransaksi text-center">Nama Paket</p>
          </div>
        </div>
      </button>
    `;
  }
}

customElements.define('item-pemesanan', ItemPemesanan);
