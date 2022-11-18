import { EThunks, SignInPayloadType } from '@constants/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '@services/api';
import { readStorage } from '@utils';

export const signIn = createAsyncThunk(EThunks.signIn, async (payload: SignInPayloadType) => {
  try {
    const { data } = await api.auth.signIn(payload);

    return data;
  } catch (e) {
    // todo => handle 403...
    console.log(e);
  }
});

export const loadSignedUser = createAsyncThunk(EThunks.loadAuthUser, async () => {
  try {
    const accessToken = await readStorage('accessToken');

    if (!accessToken) {
      return null;
    }

    const { data } = await api.user.getMe();

    return data;
  } catch (e) {
    // todo => handle 403...
    console.log(e);
  }
});
