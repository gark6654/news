import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { EThunks, ISignInPayload } from '@constants/types';
import api from '@services/api';
import { readStorage, removeStorage, setStorage } from '@utils';

export const login = createAsyncThunk(EThunks.login, async (payload: ISignInPayload) => {
  try {
    const { data } = await api.auth.signIn(payload.credentials);
    await setStorage('accessToken', data.accessToken);
    return data;
  } catch (e) {
    payload.onError(e as AxiosError);
    console.log(e);
  }
});

export const logout = createAsyncThunk(EThunks.logout, async () => {
  try {
    await removeStorage('accessToken');
  } catch (e) {
    console.log(e);
  }
});

export const loadSignedUser = createAsyncThunk(EThunks.loadSignedUser, async () => {
  try {
    const accessToken = await readStorage('accessToken');

    if (!accessToken) {
      return null;
    }

    const { data } = await api.user.getMe();

    return data;
  } catch (e) {
    console.log(e);
  }
});
