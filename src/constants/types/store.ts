import { store } from '@store/index';

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

interface IAuthState {
  isLoaded: boolean;
  isLogged: boolean;
  user: {} | null;
}

export type {
  RootState,
  AppDispatch,
  IAuthState,
};
