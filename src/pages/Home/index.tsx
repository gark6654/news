import { View } from 'react-native';
import { InternalLink, Paragraph } from '@components/atoms';

const Home = () => (
  <View>
    <InternalLink to="SignIn">
      <Paragraph>Sign In</Paragraph>
    </InternalLink>
  </View>
);

export default Home;
