import { EColors } from '@constants/types/enums';
import { StyleProp, ViewStyle } from 'react-native';

export * from './navigation';
export * from './store';
export * from './api';
export * from './enums';
export * from './forms';

type InputTypes = 'text' | 'email' | 'phone' | 'number' | 'password';

interface IIconProps {
  width?: number;
  height?: number;
  fill?: EColors;
  style?: StyleProp<ViewStyle>;
}

export type {
  InputTypes,
  IIconProps,
};
