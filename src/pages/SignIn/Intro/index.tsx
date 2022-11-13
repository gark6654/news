import { View } from 'react-native';
import { Heading, Paragraph } from '@components/atoms';
import styles from './style';

const Intro = () => (
  <View style={styles.root}>
    <Heading style={[styles.titles, styles.title1]}>
      Hello
    </Heading>
    <Heading style={[styles.titles, styles.title2]}>
      Again!
    </Heading>
    <Paragraph style={styles.description}>
      Welcome back you've
    </Paragraph>
    <Paragraph style={styles.description}>
      been missed
    </Paragraph>
  </View>
);

export default Intro;
