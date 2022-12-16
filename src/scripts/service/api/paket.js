/* eslint-disable import/no-unresolved */
import API_ENDPOINT from '../../global/api-endpoint';
import itemPaket from '../../views/components/item-paket';

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
        // console.log(...response.data.data);
        console.log(response.data.data);
        // itemPaket(...response.data.data);
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
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Paket;
