import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '@types';
import { getPostById } from '@store/thunks/authThunk';

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
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
