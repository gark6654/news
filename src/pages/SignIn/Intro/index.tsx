import { useMemo } from 'react';
import { useColorScheme, View } from 'react-native';
import { Heading, Paragraph } from '@components/atoms';
import styles from './style';

const Intro = () => {
  const theme = useColorScheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <View style={styles.root}>
      <Heading style={[styles.titles, styles.title1, isDark && styles.title1Dark]}>
        Hello
      </Heading>
      <Heading style={[styles.titles, styles.title2]}>
        Again!
      </Heading>
      <Paragraph style={[styles.description, isDark && styles.descriptionDark]}>
        Welcome back you've
      </Paragraph>
      <Paragraph style={[styles.description, isDark && styles.descriptionDark]}>
        been missed
      </Paragraph>
    </View>
  );
};

export default Intro;
