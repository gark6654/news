import axios from '../axios';

const endpoints = {
  getMe: () => axios.get('/me/user/635ace449f65292c1aaed6a7'),
};

export default endpoints;
