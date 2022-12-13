import CONFIG from '../global/config';

const getDataLocalStorage = () => {
  const data = localStorage.getItem(CONFIG.STORAGE_KEY);
  return JSON.parse(data);
};

const saveDataToLocalStorage = (inputEmail, inputPassword) => {
  const object = {
    userEmail: inputEmail,
    userPassword: inputPassword,
  };
  const parsed = JSON.stringify(object);
  localStorage.setItem(CONFIG.STORAGE_KEY, parsed);
};

const removeDataLocalStorage = () => {
  localStorage.removeItem(CONFIG.STORAGE_KEY);
};

export { getDataLocalStorage, saveDataToLocalStorage, removeDataLocalStorage };
