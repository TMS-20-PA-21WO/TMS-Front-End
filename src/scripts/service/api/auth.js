import API_ENDPOINT from '../../global/api-endpoint';

const axios = require('axios');

class Auth {
  static async login(_email, _password) {
    const _data = JSON.stringify({
      email: _email,
      password: _password,
    });

    try {
      const res = await axios({
        url: API_ENDPOINT.LOGIN,
        method: 'post',
        headers: {
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
    }
  }

  static async register(_username, _email, _password) {
    const _data = JSON.stringify({
      username: _username,
      email: _email,
      password: _password,
    });

    try {
      const res = await axios({
        url: API_ENDPOINT.REGISTER,
        method: 'post',
        headers: {
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
    }
  }
}

export default Auth;
