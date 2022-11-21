import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = StyleSheet.create({
  root: {
    marginTop: 30,
  },
  submitBtn: {
    marginTop: 30,
    padding: 12,
    borderRadius: 6,
    backgroundColor: EColors.primary,
  },
  submitText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
    color: EColors.white,
  },
  questionBox: {
    flex: .3,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    color: EColors.body,
  },
  questionDark: {
    color: EColors.bodyDark,
  },
  link: {
    marginLeft: 10,
    color: EColors.primary,
  },
});

export default style;
