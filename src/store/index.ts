import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import countryReducer from './slices/countrySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    country: countryReducer,
  },
});
