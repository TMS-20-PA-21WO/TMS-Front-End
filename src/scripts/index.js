/* eslint-disable no-unused-vars */
import 'regenerator-runtime';

import '../scss/style.scss';

import * as bootstrap from 'bootstrap';
import App from './views/app';

const app = new App({
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
