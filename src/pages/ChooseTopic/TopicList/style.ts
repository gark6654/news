import { StyleSheet } from 'react-native';

const style = (isDark: boolean) => StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 16,

  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default style;
