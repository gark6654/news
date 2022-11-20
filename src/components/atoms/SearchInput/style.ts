import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: isDark ? EColors.inputDark : EColors.black,
    backgroundColor: isDark ? EColors.inputDark : EColors.white,

    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  input: {
    flex: 1,
    color: isDark ? EColors.bodyDark : EColors.black,
  },
  searchIcon: {},
});

export default style;
