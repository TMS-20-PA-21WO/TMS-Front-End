/* eslint-disable import/no-unresolved */
import API_ENDPOINT from '../../global/api-endpoint';
import itemPaket from '../../views/components/item-paket';

const axios = require('axios');

class Paket {
  static async getAllPaket() {
    return axios({
      url: API_ENDPOINT.READ_PAKET,
      method: 'get',
      timeout: 8000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.data)
      .catch((err) => console.error(err));
    }
    getAllPaket().then((res) => console.log(res));

  static async getPaketByID(id) {
    const config = {
      method: 'get',
      url: API_ENDPOINT.READ_PAKET_ID(id),
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Paket;
