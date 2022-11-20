import { IRootRoutes } from '@types';
import { Homepage, SignInPage, SignUpPage, CountryPage } from '@pages';

export const RootRoutes: IRootRoutes = {
  private: [
    {
      name: 'Home',
      component: Homepage,
    },
    {
      name: 'Country',
      component: CountryPage,
    },
  ],
  public: [
    {
      name: 'SignIn',
      component: SignInPage,
    },
    {
      name: 'SignUp',
      component: SignUpPage,
    },
    {
      name: 'Country',
      component: CountryPage,
    },
  ],
};
