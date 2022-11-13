import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListType } from '@types';
import { RootRoutes } from '@constants/routes';
import { store } from 'store';

const App = () => {
  const {
    Navigator,
    Screen,
  } = createNativeStackNavigator<RootStackParamListType>();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          {RootRoutes.map(({
            name,
            component,
          }) => (
            <Screen key={name} name={name} component={component} />
          ))}
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
