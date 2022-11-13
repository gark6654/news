import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = StyleSheet.create({
  root: {},
  label: {
    marginTop: 15,
    color: EColors.body,
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
  required: {
    color: EColors.error,
  },
});

export default style;
