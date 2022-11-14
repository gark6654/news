import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = StyleSheet.create({
  label: {
    marginTop: 15,
    color: EColors.body,
  },
  labelDark: {
    color: EColors.bodyDark,
  },
  inputBox: {
    position: 'relative',
  },
  input: {
    marginTop: 4,
    height: 48,
    padding: 10,
    color: EColors.black,
    // border style
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: EColors.body,
  },
  inputDark: {
    color: EColors.bodyDark,
    borderColor: EColors.bodyDark,
  },
  inputError: {
    borderColor: EColors.errorDark,
    backgroundColor: EColors.inputError,
  },
  inputBtn: {
    position: 'absolute',
    right: 14,
    top: 20,
  },
  errorBox: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    marginLeft: 5,
    color: EColors.errorDark,
  },
  required: {
    color: EColors.error,
  },
});

export default style;
