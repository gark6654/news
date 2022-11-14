import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EColors, RootStackParamListType } from '@types';
import { RootRoutes } from '@constants/routes';
import { store } from './store/';
import { useMemo } from 'react';

const App = () => {
  const theme = useColorScheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);
  const {
    Navigator,
    Screen,
  } = createNativeStackNavigator<RootStackParamListType>();

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <View style={[styles.root, isDark && styles.dark]}>
        <NavigationContainer>
          <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
            {RootRoutes.map(({
              name,
              component,
            }) => (
              <Screen key={name} name={name} component={component} />
            ))}
          </Navigator>
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
