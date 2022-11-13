import { WEB_API_ORIGIN } from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: `${WEB_API_ORIGIN}/api`,
});

axiosInstance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('accessToken');

  if (token) {
    config.headers ??= {};
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

export default axiosInstance;
