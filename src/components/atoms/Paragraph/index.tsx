import { ReactNode } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import styles from './style';

interface IProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const Paragraph = ({
  children,
  style,
}: IProps) => (
  <Text style={[styles.root, style]}>
    {children}
  </Text>
);

export default Paragraph;
