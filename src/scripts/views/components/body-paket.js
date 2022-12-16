class BodyPaket extends HTMLElement {
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
    <option>Paket 1</option>
`;
  }
}

customElements.define('body-paket', BodyPaket);
