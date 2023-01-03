import CONFIG from '../global/config';

const getDataLocalStorage = () => {
  const data = localStorage.getItem(CONFIG.STORAGE_KEY);
  return JSON.parse(data);
};

const saveDataToLocalStorage = (id, username, access_token) => {
  const object = {
    userId: id,
    userUsername: username,
    userAccessToken: access_token,
  };
  const parsed = JSON.stringify(object);
  localStorage.setItem(CONFIG.STORAGE_KEY, parsed);
};

const removeDataLocalStorage = () => {
  localStorage.removeItem(CONFIG.STORAGE_KEY);
};

export { getDataLocalStorage, saveDataToLocalStorage, removeDataLocalStorage };
