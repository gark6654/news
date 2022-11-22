import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = StyleSheet.create({
  root: {
    margin: 5,
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: EColors.primary,
  },
  active: {
    backgroundColor: EColors.primary,
  },
  text: {
    color: EColors.primary,
  },
  activeText: {
    color: EColors.white,
  },
});

export default style;
