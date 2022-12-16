import API_ENDPOINT from '../../global/api-endpoint';

const axios = require('axios');

class Auth {
  static async login(_email, _password) {
    const _data = JSON.stringify({
      email: _email,
      password: _password,
    });

    const config = {
      method: 'post',
      url: API_ENDPOINT.LOGIN,
      headers: {
        'Content-Type': 'application/json',
      },
      data: _data,
    };

    axios(config)
      .then((response) => {
        console.log(response.data.data);
        // return response.JSON();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async register(_username, _email, _password) {
    const _data = JSON.stringify({
      username: _username,
      email: _email,
      password: _password,
    });

    const config = {
      method: 'post',
      url: API_ENDPOINT.REGISTER,
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

export default Auth;
