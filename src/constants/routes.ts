import { IRootRoutes } from '@types';
import { Homepage, SignInPage } from '@pages';

export const RootRoutes: IRootRoutes = {
  private: [
    {
      name: 'Home',
      component: Homepage,
    },
  ],
  public: [
    {
      name: 'SignIn',
      component: SignInPage,
    },
  ],
};
