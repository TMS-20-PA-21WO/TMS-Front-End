/* eslint-disable import/no-unresolved */
import API_ENDPOINT from '../../global/api-endpoint';

const axios = require('axios');

class Paket {
  static async getAllPaket() {
    const config = {
      method: 'get',
      url: API_ENDPOINT.READ_PAKET,
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async getPaketByID(id) {
    const config = {
      method: 'get',
      url: API_ENDPOINT.READ_PAKET_ID(id),
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Paket;
