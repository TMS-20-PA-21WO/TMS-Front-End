import { getDataLocalStorage } from '../../data/local-storage';

const Portofolio = {
  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#/portofolio');
      // location.reload();
    } else {
      location.replace('#/portofolio');
    }
  },
  async render() {
    return `
      <hero-element></hero-element>
  
  
        `;
  },

  async afterRender() {
    console.log('Halaman Portofolio');
  },
};

export default Portofolio;
