import API_ENDPOINT from '../../global/api-endpoint';

const axios = require('axios');

class User {
  static async getAllUser() {
    try {
      const res = await axios({
        url: API_ENDPOINT.READ_USER,
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

  static async getUserById(id) {
    try {
      const res = await axios({
        url: API_ENDPOINT.READ_USER_ID(id),
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
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

export default User;
