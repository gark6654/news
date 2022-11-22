import { IRootRoutes } from '@types';
import {
  Homepage,
  SignInPage,
  SignUpPage,
  CountryPage,
  FillProfilePage, ChooseTopicPage,
} from '@pages';

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
    {
      name: 'SignUp',
      component: SignUpPage,
    },
    {
      name: 'Country',
      component: CountryPage,
    },
    {
      name: 'FillProfile',
      component: FillProfilePage,
    },
    {
      name: 'ChooseTopic',
      component: ChooseTopicPage,
    },
  ],
};
