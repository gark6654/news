import axios from '../axios';

const endpoints = {
  getMe: () => axios.get('/me/user'),
};

export default endpoints;
