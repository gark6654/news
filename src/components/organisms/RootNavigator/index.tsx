import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListType } from '@types';
import { selectAuth } from '@store/selectors/authSelector';
import { RootRoutes } from '@constants/routes';
import { useAppSelector } from '@hooks';
import { LoadingPage } from '@pages';

const RootNavigator = () => {
  const {
    Navigator,
    Screen,
  } = createNativeStackNavigator<RootStackParamListType>();

  const {
    loaded,
    signed,
  } = useAppSelector(selectAuth);

  if (!loaded) {
    return (
      <Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Screen name="Loading" component={LoadingPage} />
      </Navigator>
    );
  }

  if (!signed) {
    return (
      <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        {RootRoutes.public.map(({
          name,
          component,
        }) => (
          <Screen key={name} name={name} component={component} />
        ))}
      </Navigator>
    );
  }

  if (signed) {
    return (
      <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        {RootRoutes.private.map(({
          name,
          component,
        }) => (
          <Screen key={name} name={name} component={component} />
        ))}
      </Navigator>
    );
  }

  return (
    <View></View>
  );
};

export default RootNavigator;
