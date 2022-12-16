import API_ENDPOINT from '../../global/api-endpoint';

const axios = require('axios');

class User {
  static async getAllUser() {
    const config = {
      method: 'get',
      url: API_ENDPOINT.READ_USER,
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

  static async getUserById(id) {
    const config = {
      method: 'get',
      url: API_ENDPOINT.READ_PAKET_ID(id),
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default User;
