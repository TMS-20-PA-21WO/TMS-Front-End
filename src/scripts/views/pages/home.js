import { getDataLocalStorage } from '../../data/local-storage';
import Auth from '../../service/api/auth';
import Paket from '../../service/api/paket';

const Home = {
  init({ id, package_name, price }) {
    this._id = id;
    this._package_name = package_name;
    this._price = price;
  },

  async beforeRender() {
    if (getDataLocalStorage() === null) {
      location.replace('#');
      // location.reload();
    } else {
      location.replace('#');
    }
    // Paket.getAllPaket();
    // Paket.getPaketByID(2);
    // Auth.login();
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
