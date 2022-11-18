import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListType } from '@types';
import { RootRoutes } from '@constants/routes';
import { LoadingPage } from '@pages';
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectAuth } from '@store/selectors/authSelector';
import { loadSignedUser } from '@store/thunks/authThunk';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';

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
    isLoaded,
    isSigned,
    user,
  } = useAppSelector(selectAuth);
  console.log(user);

  const loadUser = useCallback(() => dispatch(loadSignedUser()), [dispatch]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (!isLoaded) {
    return (
      <Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Screen name="Loading" component={LoadingPage} initialParams={{ isDark }} />
      </Navigator>
    );
  }

  if (!isSigned) {
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

  if (isSigned) {
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
