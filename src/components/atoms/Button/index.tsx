import { ReactNode } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import styles from './style';

interface IProps {
  children: ReactNode;
  onPress: (e: GestureResponderEvent) => void;
}

const Button = ({
  children,
  onPress,
}: IProps) => (
  <TouchableOpacity onPress={onPress} style={styles.root}>
    {children}
  </TouchableOpacity>
);

export default Button;
