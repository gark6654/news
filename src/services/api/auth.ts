import { SignInPayloadType } from '@constants/types';
import axios from '../axios';

const endpoints = {
  signIn: (payload: SignInPayloadType) => axios.post('/signIn', payload),
};

export default endpoints;
