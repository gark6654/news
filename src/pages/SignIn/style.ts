import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: EColors.background,
  },
  dark: {
    backgroundColor: EColors.backgroundDark,
  },
});

export default style;
