import { useMemo } from 'react';
import { useColorScheme, View } from 'react-native';
import { Heading, Paragraph } from '@components/atoms';
import styles from './style';

const Intro = () => {
  const theme = useColorScheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <View style={styles.root}>
      <Heading style={styles.title}>
        Hello!
      </Heading>
      <Paragraph style={[styles.description, isDark && styles.descriptionDark]}>
        Sign Up to get started
      </Paragraph>
    </View>
  );
};

export default Intro;
