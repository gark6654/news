import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = StyleSheet.create({
  root: {
    flex: .3,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  question: {
    color: EColors.body,
  },
  link: {
    color: EColors.primary,
  },
});

export default style;
