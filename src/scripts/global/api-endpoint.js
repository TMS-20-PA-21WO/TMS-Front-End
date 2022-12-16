import CONFIG from './config';

const API_ENDPOINT = {
  // USER //
  LOGIN: `${CONFIG.BASE_URL}/user/auth`,
  REGISTER: `${CONFIG.BASE_URL}/user`,
  READ_USER: `${CONFIG.BASE_URL}/user`,
  READ_USER_ID: (id) => `${CONFIG.BASE_URL}/user/${id}`,

  // PEMESANAN //
  CREATE_PEMESANAN: `${CONFIG.BASE_URL}/pemesanan`,
  READ_PEMESANAN: `${CONFIG.BASE_URL}/pemesanan`,
  READ_PEMESANAN_ID: (id) => `${CONFIG.BASE_URL}/pemesanan/${id}`,
  UPDATE_PEMESANAN: `${CONFIG.BASE_URL}/pemesanan`,
  DELETE_PEMESANAN_ID: (id) => `${CONFIG.BASE_URL}/pemesanan/${id}`,

  // PAKET //
  READ_PAKET: `${CONFIG.BASE_URL}/paket`,
  READ_PAKET_ID: (id) => `${CONFIG.BASE_URL}/paket/${id}`,
};

export default API_ENDPOINT;
