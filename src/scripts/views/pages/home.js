import { getDataLocalStorage } from '../../data/local-storage';

const Home = {
  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#');
      // location.reload();
    } else {
      location.replace('#');
    }
  },
  async render() {
    return `
    <hero-element></hero-element>


      `;
  },

  async afterRender() {
    console.log('Halaman Home');
  },
};

export default Home;
