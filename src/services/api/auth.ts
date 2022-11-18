import { SignInPayloadType } from '@constants/types';
import axios from '../axios';

const endpoints = {
  signIn: (payload: SignInPayloadType) => axios.post('/auth/login', payload),
};

export default endpoints;
