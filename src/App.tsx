import { useMemo } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { EColors } from '@types';
import { store } from './store/';
import { RootNavigator } from '@components/organisms';

const App = () => {
  const theme = useColorScheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <View style={[styles.root, isDark && styles.dark]}>
        <NavigationContainer>
          <RootNavigator isDark={isDark} />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    backgroundColor: EColors.background,
  },
  dark: {
    backgroundColor: EColors.backgroundDark,
  },
});
