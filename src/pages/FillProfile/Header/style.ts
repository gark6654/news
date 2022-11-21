import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: isDark ? EColors.backgroundDark : EColors.background,
  },
  heading: {
    color: isDark ? EColors.white : EColors.black,
  },
  backBtn: {
    position: 'absolute',
    left: 0,
  },
});

export default style;
