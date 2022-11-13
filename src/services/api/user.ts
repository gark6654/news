import axios from '../axios';

const endpoints = {
  getMe: () => axios.get('/user/me'),
};

export default endpoints;
