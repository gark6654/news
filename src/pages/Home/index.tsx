import { TouchableHighlight, View } from 'react-native';
import { Paragraph } from '@components/atoms';
import { useAppDispatch, useAppSelector } from '@hooks';
import { useCallback } from 'react';
import { getPostById } from '@store/thunks/authThunk';
import { selectUser } from '@store/selectors/authSelector';
import { signOut } from '@store/slices/authSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  console.log('user', user);

  const load = useCallback(async () => {
    dispatch(getPostById(2));
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <View>
      <TouchableHighlight onPress={logOut}>
        <Paragraph>Sign out</Paragraph>
      </TouchableHighlight>
      <TouchableHighlight onPress={load}>
        <Paragraph>Sign in</Paragraph>
      </TouchableHighlight>
    </View>
  );
};

export default Home;
