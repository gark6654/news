import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = StyleSheet.create({
  root: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 48,
    lineHeight: 72,
    fontFamily: 'Poppins-ExtraBold',
    color: EColors.primary,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    lineHeight: 30,
    color: EColors.body,
  },
  descriptionDark: {
    color: EColors.bodyDark,
  },
});

export default style;
