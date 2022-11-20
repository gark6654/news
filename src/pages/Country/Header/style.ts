import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    backgroundColor: isDark ? EColors.backgroundDark : EColors.background,
  },
  heading: {
    color: isDark ? EColors.white : EColors.black,
  },
  wrapper: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 16,
  },
  backBtn: {
    position: 'absolute',
    left: 0,
  },
});

export default style;
