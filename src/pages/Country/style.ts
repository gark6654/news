import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: isDark ? EColors.backgroundDark : EColors.background,
  },
});

export default style;
