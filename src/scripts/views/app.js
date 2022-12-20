import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

import './components/app-bar';
import './components/hero-element';
import './components/history-pemesanan';
import './components/item-pemesanan';
import './components/body-detail-pemesanan';
import './components/body-add-pemesanan';
import './components/body-edit-pemesanan';

class App {
  constructor({ content }) {
    this.content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    await page.beforeRender();
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
