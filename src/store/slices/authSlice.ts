import { IAuthState } from '@types';
import { createSlice } from '@reduxjs/toolkit';
import { signIn, loadSignedUser } from '../thunks/authThunk';

const initialState: IAuthState = {
  user: null,
  isSigned: false,
  isLoaded: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: () => ({
      ...initialState,
      isLoaded: true,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => ({
      user: action.payload ? action.payload : null,
      isSigned: Boolean(action.payload),
      isLoaded: true,
    }));
    builder.addCase(signIn.rejected, () => ({
      ...initialState,
      isLoaded: true,
    }));
    builder.addCase(loadSignedUser.fulfilled, (state, action) => ({
      user: action.payload ? action.payload : null,
      isSigned: false,
      isLoaded: true,
    }));
    builder.addCase(loadSignedUser.rejected, () => ({
      ...initialState,
      isLoaded: true,
    }));
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
