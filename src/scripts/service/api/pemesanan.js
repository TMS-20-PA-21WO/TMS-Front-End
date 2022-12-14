import { getDataLocalStorage, removeDataLocalStorage } from '../../data/local-storage';
import API_ENDPOINT from '../../global/api-endpoint';

const axios = require('axios');

class Pemesanan {
  static async getAllPemesanan() {
    try {
      const res = await axios({
        url: API_ENDPOINT.READ_PEMESANAN,
        method: 'get',
        headers: {
          Authorization: `Bearer ${getDataLocalStorage().userAccessToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.error(err);
      alert('Sesi telah Expired, Silahkan Login Kembali');
      removeDataLocalStorage();
      location.reload();
    }
  }

  static async getPemesananById(id) {
    try {
      const res = await axios({
        url: API_ENDPOINT.READ_PEMESANAN_ID(id),
        method: 'get',
        headers: {
          Authorization: `Bearer ${getDataLocalStorage().userAccessToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data.data;
      }
    } catch (err) {
      console.error(err);
      alert('Sesi telah Expired, Silahkan Login Kembali');
      removeDataLocalStorage();
      location.reload();
    }
  }

  static async deletePemesananById(id) {
    try {
      const res = await axios({
        url: API_ENDPOINT.DELETE_PEMESANAN_ID(id),
        method: 'delete',
        headers: {
          Authorization: `Bearer ${getDataLocalStorage().userAccessToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.error(err);
      alert('Sesi telah Expired, Silahkan Login Kembali');
      removeDataLocalStorage();
      location.reload();
    }
  }

  static async getPemesananByUser(_id_user) {
    const _data = JSON.stringify({
      id_user: _id_user,
    });

    try {
      const res = await axios({
        url: API_ENDPOINT.READ_PEMESANAN_USER,
        method: 'post',
        headers: {
          Authorization: `Bearer ${getDataLocalStorage().userAccessToken}`,
          'Content-Type': 'application/json',
        },
        data: _data,
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data.data;
      }
    } catch (err) {
      console.error(err);
      alert('Sesi telah Expired, Silahkan Login Kembali');
      removeDataLocalStorage();
      location.reload();
    }
  }

  static async updatePemesanan(_id, _id_user, _id_package, _date, _phone_number) {
    const _data = JSON.stringify({
      id: _id,
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
        url: API_ENDPOINT.UPDATE_PEMESANAN,
        method: 'put',
        headers: {
          Authorization: `Bearer ${getDataLocalStorage().userAccessToken}`,
          'Content-Type': 'application/json',
        },
        data: _data,
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.error(err);
      alert('Sesi telah Expired, Silahkan Login Kembali');
      removeDataLocalStorage();
      location.reload();
    }
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
          Authorization: `Bearer ${getDataLocalStorage().userAccessToken}`,
          'Content-Type': 'application/json',
        },
        data: _data,
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.error(err);
      alert('Sesi telah Expired, Silahkan Login Kembali');
      removeDataLocalStorage();
      location.reload();
    }
  }

  static async pemesananValidation(_id_user, _date) {
    const _data = JSON.stringify({
      id_user: _id_user,
      date: _date,
    });

    try {
      const res = await axios({
        url: API_ENDPOINT.PEMESANAN_VALIDATION,
        method: 'post',
        headers: {
          Authorization: `Bearer ${getDataLocalStorage().userAccessToken}`,
          'Content-Type': 'application/json',
        },
        data: _data,
      });
      if (res.status === 200) {
        // console.log(res.data);
        return res.data.data;
      }
    } catch (err) {
      console.error(err);
      alert('Sesi telah Expired, Silahkan Login Kembali');
      removeDataLocalStorage();
      location.reload();
    }
  }
}

export default Pemesanan;
