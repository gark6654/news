import { IAuthState } from '@types';
import { createSlice } from '@reduxjs/toolkit';
import { loadSignedUser, login, logout } from '../thunks/authThunk';

const initialState: IAuthState = {
  user: null,
  signed: false,
  loaded: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, () => ({
      ...initialState,
      loaded: true,
    }));
    builder.addCase(login.fulfilled, (state, action) => ({
      user: action.payload ? action.payload : null,
      signed: Boolean(action.payload),
      loaded: true,
      accessToken: action.payload?.accessToken,
    }));
    builder.addCase(loadSignedUser.fulfilled, (state, action) => ({
      user: action.payload ? action.payload : null,
      signed: Boolean(action.payload),
      loaded: true,
      accessToken: action.payload?.accessToken,
    }));
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
