import { store } from '@store/index';

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

interface IAuthState {
  user: {} | null;
  isLoaded: boolean;
  isSigned: boolean;
  accessToken?: string;
}

export type {
  RootState,
  AppDispatch,
  IAuthState,
};
