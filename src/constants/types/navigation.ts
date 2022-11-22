import { ReactElement } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ISignUpForm } from '@constants/types/forms';

interface IFillProfileParams extends ISignUpForm {
  country: string;
}

interface IChooseTopicParams extends IFillProfileParams {
}

type RootStackParamListType = {
  Loading: undefined;
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Country: ISignUpForm;
  FillProfile: IFillProfileParams;
  ChooseTopic: IChooseTopicParams;
}

interface IRoute {
  name: keyof RootStackParamListType;
  component: (props?: NativeStackScreenProps<RootStackParamListType, keyof RootStackParamListType>) => ReactElement;
  initialParams?: {};
}

interface IRootRoutes {
  private: IRoute[];
  public: IRoute[];
}

export type {
  IRoute,
  IRootRoutes,
  RootStackParamListType,
  IFillProfileParams,
  IChooseTopicParams,
};
