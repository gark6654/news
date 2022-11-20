import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: EColors.black,
    borderRadius: 5,
    height: 48,
  },
});

export default style;
