import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    height: 36,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  active: {
    backgroundColor: EColors.primary,
  },
  text: {
    color: isDark ? EColors.bodyDark : EColors.body,
  },
  activeText: {
    color: EColors.white,
  },
});

export default style;
