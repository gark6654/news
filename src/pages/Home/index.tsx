import { View } from 'react-native';
import { useAppDispatch } from '@hooks';
import { signOut } from '@store/slices/authSlice';
import { Button, Paragraph } from '@components/atoms';

const Home = () => {
  const dispatch = useAppDispatch();

  const logout = () => dispatch(signOut());

  return (
    <View>
      <Button onPress={logout}>
        <Paragraph>Log out</Paragraph>
      </Button>
    </View>
  );
};

export default Home;
