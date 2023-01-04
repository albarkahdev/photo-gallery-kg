import axios from 'axios';

import { handleErrorAPI } from './handle_error_helper';

const getInstance = (config) => {
  const instance = axios.create({
    baseURL: process.env.UNSPLASH_BASE_SERVER_URL || "https://api.unsplash.com",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Client-ID ${process.env.UNSPLASH_BASE_API_KEY || "ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4"}`
    },
  });

  instance.interceptors.request.use(
    (conf) => {
      const configInstace = conf;
      if (
        configInstace.method === 'get'
        || configInstace.data === undefined
      ) {
        configInstace.data = true;
      }
      const newConfig = { ...configInstace, ...config };
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        // console.log(newConfig);
      }
      return newConfig;
    },
    (error) => Promise.reject(error),
  );
  return instance;
};

const httpRequest = (method, path, data, config = {}) => new Promise((resolve, reject) => {
  getInstance(config)[method](path, data, {})
    .then((response) => resolve(response))
    .catch((error) => reject(handleErrorAPI(error)));
});

export async function get(path, data, config) {
  return await httpRequest('get', path, data, config);
}
