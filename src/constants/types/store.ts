import { AxiosError } from 'axios';
import { store } from '@store/index';
import { IGroupByName, SignInPayloadType } from '@constants/types';

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

interface IUser {
  _id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  full: string;
  country: string;
  accessToken: string;
  createdAt: string;
  updatedAt: string;
  confirmed?: string;
  verifiedAt?: string;
}

interface IAuthState {
  user: IUser | null;
  loaded: boolean;
  signed: boolean;
  accessToken?: string;
}

interface ICountriesState {
  countries: IGroupByName[];
  loaded: boolean;
}

interface ISignInPayload {
  credentials: SignInPayloadType;
  onError: (e: AxiosError) => void;
}

export type {
  RootState,
  AppDispatch,
  IAuthState,
  ICountriesState,
  ISignInPayload,
};
