import API_ENDPOINT from '../../global/api-endpoint';

const axios = require('axios');

class Pemesanan {
  static async getAllPemesanan() {
    try {
      const res = await axios({
        url: API_ENDPOINT.READ_PEMESANAN,
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        console.log(res.data.data);
        return res.data;
      }
    } catch (err) {
      console.error(err);
    }
  }

  static async getPemesananById(id) {
    try {
      const res = await axios({
        url: API_ENDPOINT.READ_PEMESANAN_ID(id),
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

  static async updatePemesanan(_id_user, _id_package, _date, _phone_number) {
    const _data = JSON.stringify({
      user: [
        {
          id: _id_user,
        },
      ],
      paket: [
        {
          id: _id_package,
        },
      ],
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

  static async createPemesanan(_id_user, _id_package, _date, _phone_number) {
    const _data = JSON.stringify({
      user: {
        id: _id_user,
      },

      paket: {
        id: _id_package,
      },
      date: _date,
      phone_number: _phone_number,
    });

    try {
      const res = await axios({
        url: API_ENDPOINT.CREATE_PEMESANAN,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: _data,
      });
      if (res.status === 200) {
        console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.error(err);
    }
  }
}

export default Pemesanan;
