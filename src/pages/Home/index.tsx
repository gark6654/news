import { View } from 'react-native';
import { useAppDispatch } from '@hooks';
import { logout } from '@store/thunks/authThunk';
import { Button, Paragraph } from '@components/atoms';

const Home = () => {
  const dispatch = useAppDispatch();

  const signOut = () => dispatch(logout());

  return (
    <View>
      <Button onPress={signOut}>
        <Paragraph>Log out</Paragraph>
      </Button>
    </View>
  );
};

export default Home;
