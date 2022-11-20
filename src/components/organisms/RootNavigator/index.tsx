import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListType } from '@types';
import { RootRoutes } from '@constants/routes';
import { LoadingPage } from '@pages';
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectAuth } from '@store/selectors/authSelector';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { loadSignedUser, logout } from '@store/thunks/authThunk';

interface IProps {
  isDark: boolean;
}

const RootNavigator = ({ isDark }: IProps) => {
  const dispatch = useAppDispatch();
  const {
    Navigator,
    Screen,
  } = createNativeStackNavigator<RootStackParamListType>();

  const {
    loaded,
    signed,
  } = useAppSelector(selectAuth);

  const loadUser = useCallback(async () => {
    await dispatch(logout());
    await dispatch(loadSignedUser());
  }, [dispatch]);

  useEffect(() => {
  }, []);

  if (!loaded) {
    return (
      <Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Screen name="Loading" component={LoadingPage} initialParams={{ isDark }} />
      </Navigator>
    );
  }

  if (!signed) {
    return (
      <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        {RootRoutes.public.map(({
          name,
          component,
          initialParams,
        }) => (
          <Screen key={name} name={name} component={component} initialParams={{ isDark, ...initialParams }} />
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
          initialParams,
        }) => (
          <Screen key={name} name={name} component={component} initialParams={{ isDark, ...initialParams }} />
        ))}
      </Navigator>
    );
  }

  return (
    <View></View>
  );
};

export default RootNavigator;
