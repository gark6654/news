import { EThunks } from '@constants/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '@services/api';

const loadAuthUser = createAsyncThunk(EThunks.loadAuthUser, async () => {
  try {
    const accessToken = AsyncStorage.getItem('accessToken');

    if (!accessToken) {
      return null;
    }
    // const { data } = await api.user.getMe();
    //
    // return data;
  } catch (e) {

  }
});

export {
  loadAuthUser,
};
