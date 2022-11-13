import { ReactNode } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import styles from './style';

interface IProps {
  children: ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  style?: StyleProp<TextStyle>;
}

const Heading = ({
  size = 1,
  style,
  children,
}: IProps) => (
  <Text style={[styles.root, styles[size], style]}>
    {children}
  </Text>
);

export default Heading;
