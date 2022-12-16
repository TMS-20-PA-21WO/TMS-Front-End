import API_ENDPOINT from '../../global/api-endpoint';

const axios = require('axios');

class Pemesanan {
  static async getAllPemesanan() {
    const config = {
      method: 'get',
      url: API_ENDPOINT.READ_PEMESANAN,
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

  static async getPemesananById(id) {
    const config = {
      method: 'get',
      url: API_ENDPOINT.READ_PEMESANAN_ID(id),
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

  static async updatePemesanan(_id, _id_user, _id_package, _date, _phone_number) {
    const _data = JSON.stringify({
      id: _id,
      id_user: _id_user,
      id_package: _id_package,
      date: _date,
      phone_number: _phone_number,
    });

    const config = {
      method: 'put',
      url: API_ENDPOINT.UPDATE_PEMESANAN,
      headers: {
        'Content-Type': 'application/json',
      },
      data: _data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async createPemesanan(_id, _id_user, _id_package, _date, _phone_number) {
    const _data = JSON.stringify({
      id: _id,
      id_user: _id_user,
      id_package: _id_package,
      date: _date,
      phone_number: _phone_number,
    });

    const config = {
      method: 'put',
      url: API_ENDPOINT.UPDATE_PEMESANAN,
      headers: {
        'Content-Type': 'application/json',
      },
      data: _data,
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

export default Pemesanan;
