import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: isDark ? EColors.backgroundDark : EColors.background,
  },
  btn: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 5,
    backgroundColor: EColors.primary,
  },
  btnDisabled: {
    backgroundColor: EColors.grey,
  },
  btnText: {
    color: EColors.black,
  },
  btnLightText: {
    color: EColors.white,
  },
});

export default style;
