import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

// import Paket from '../service/api/paket';

import './components/app-bar';
import './components/hero-element';

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
    // Paket();
  }
}

export default App;
