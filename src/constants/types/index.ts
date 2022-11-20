import { EColors } from '@constants/types/enums';
import { StyleProp, ViewStyle } from 'react-native';

type AsyncStorageKeys = 'accessToken';
type InputTypes = 'text' | 'email' | 'phone' | 'number' | 'password';

interface IIconProps {
  width?: number;
  height?: number;
  fill?: EColors;
  style?: StyleProp<ViewStyle>;
}

export type {
  AsyncStorageKeys,
  InputTypes,
  IIconProps,
};

export * from './navigation';
export * from './store';
export * from './api';
export * from './enums';
export * from './forms';
export * from './utils';
