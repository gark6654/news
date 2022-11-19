import { IAuthState } from '@types';
import { createSlice } from '@reduxjs/toolkit';
import { signIn, loadSignedUser } from '../thunks/authThunk';

const initialState: IAuthState = {
  user: null,
  signed: false,
  loaded: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: () => ({
      ...initialState,
      loaded: true,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => ({
      user: action.payload ? action.payload : null,
      signed: Boolean(action.payload),
      loaded: true,
      accessToken: action.payload?.accessToken,
    }));
    builder.addCase(loadSignedUser.fulfilled, (state, action) => ({
      user: action.payload ? action.payload : null,
      signed: false,
      loaded: true,
      accessToken: action.payload?.accessToken,
    }));
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
