class HistoryPemesanan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="container d-flex justify-content-center mb-5 px-0">
        <div class="riwayat-pemesanan border rounded text-center">
          <p class="history-title mb-1">Riwayat Pemesanan</p>
          <div class="text-center" id="list-history-pemesanan"></div>
        </div>
      </section>
  `;
  }
}

customElements.define('history-pemesanan', HistoryPemesanan);
