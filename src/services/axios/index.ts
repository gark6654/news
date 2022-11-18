import { WEB_API_ORIGIN } from '@env';
import axios from 'axios';
import { readStorage } from '@utils';

const axiosInstance = axios.create({
  baseURL: `${WEB_API_ORIGIN}/api`,
});

axiosInstance.interceptors.request.use(async config => {
  const token = await readStorage('accessToken');

  if (token) {
    config.headers ??= {
      'Content-Type': 'application/json',
    };
    config.headers.Authorization = 'Bearer ' + token;
  }
  console.log(config);
  return config;
});

export default axiosInstance;
