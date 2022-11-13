import { IAuthState } from '@types';
import { createSlice } from '@reduxjs/toolkit';
import { loadAuthUser } from '../thunks/authThunk';

const initialState: IAuthState = {
  user: null,
  isLoaded: false,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loadAuthUser.fulfilled, (state, action) => {
      if (!action.payload) return;

      state = {
        user: action.payload,
        isLogged: true,
        isLoaded: true,
      };
    });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
