import { StyleSheet } from 'react-native';
import { EColors } from '@types';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    marginBottom: 16,
    borderRadius: 10,
    height: 45,
    padding: 10,
    backgroundColor: isDark ? EColors.bodyDark : EColors.grey,
  },
});

export default style;
