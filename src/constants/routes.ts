import { IRoute } from '@types';
import { Homepage, SignInPage } from '@pages';

export const RootRoutes: IRoute[] = [
  {
    name: 'Home',
    component: Homepage,
  },
  {
    name: 'SignIn',
    component: SignInPage,
  },
];
