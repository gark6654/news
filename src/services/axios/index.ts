import { WEB_API_ORIGIN } from '@env';
import axios from 'axios';
import { readStorage } from '@utils';

const axiosInstance = axios.create({
  baseURL: `${WEB_API_ORIGIN}/api`,
});

axiosInstance.interceptors.request.use(config =>
  // const token = await readStorage('accessToken');
  //
  // if (token) {
  //   config.headers ??= {};
  //   config.headers.Authorization = 'Bearer ' + token;
  // }
  config);

export default axiosInstance;
