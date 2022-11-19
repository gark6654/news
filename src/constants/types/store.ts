import { AxiosError } from 'axios';
import { store } from '@store/index';
import { SignInPayloadType } from '@constants/types';

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

interface IAuthState {
  user: {} | null;
  loaded: boolean;
  signed: boolean;
  accessToken?: string;
}

interface ISignInPayload {
  credentials: SignInPayloadType;
  onError: (e: AxiosError) => void;
}

export type {
  RootState,
  AppDispatch,
  IAuthState,
  ISignInPayload,
};
