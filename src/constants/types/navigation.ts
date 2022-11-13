import { ReactElement } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamListType = {
  Home: undefined;
  SignIn: undefined;
}

interface IRoute {
  name: keyof RootStackParamListType;
  component: (props?: NativeStackScreenProps<RootStackParamListType, keyof RootStackParamListType>) => ReactElement;
}

export type {
  IRoute,
  RootStackParamListType,
};
