import { View } from 'react-native';
import { InternalLink, Paragraph } from '@components/atoms';
import styles from './style';

const SignUp = () => (
  <View style={styles.root}>
    <Paragraph style={styles.question}>
      Don't have an account ?
    </Paragraph>
    <InternalLink to="Home">
      <Paragraph style={styles.link}>Sign up</Paragraph>
    </InternalLink>
  </View>
);

export default SignUp;
