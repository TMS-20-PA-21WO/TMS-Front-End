/* eslint-disable import/no-unresolved */
import API_ENDPOINT from '../../global/api-endpoint';
// import itemPaket from '../../views/components/item-paket';

const axios = require('axios');

class Paket {
  static async getAllPaket() {
    try {
      const res = await axios({
        url: API_ENDPOINT.READ_PAKET,
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.error(err);
    }
  }

  static async getPaketByID(id) {
    try {
      const res = await axios({
        url: API_ENDPOINT.READ_PAKET_ID(id),
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.error(err);
    }
  }
}

export default Paket;
