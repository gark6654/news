import { ReactElement } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamListType = {
  Home: {
    isDark: boolean;
  };
  SignIn: {
    isDark: boolean;
  };
  Loading: {
    isDark: boolean;
  };
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
};
