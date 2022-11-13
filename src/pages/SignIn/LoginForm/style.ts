import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = StyleSheet.create({
  root: {
    flex: .5,
    marginTop: 30,
  },
  questionWrapper: {
    marginTop: 10,
    //
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  forgot: {
    color: EColors.primary,
  },
  checkboxText: {
    marginLeft: -5,
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
});

export default style;
