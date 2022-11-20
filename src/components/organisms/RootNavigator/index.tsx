import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListType } from '@types';
import { RootRoutes } from '@constants/routes';
import { LoadingPage } from '@pages';
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectAuth } from '@store/selectors/authSelector';
import { useEffect } from 'react';
import { View } from 'react-native';

const RootNavigator = () => {
  const {
    Navigator,
    Screen,
  } = createNativeStackNavigator<RootStackParamListType>();

  const {
    loaded,
    signed,
  } = useAppSelector(selectAuth);

  // const loadUser = useCallback(async () => {
  //   await dispatch(logout());
  //   await dispatch(loadSignedUser());
  // }, [dispatch]);

  useEffect(() => {
  }, []);

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
