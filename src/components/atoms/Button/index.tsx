import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './style';

interface IProps {
  children: ReactNode;
  onPress: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  children,
  onPress,
  style,
}: IProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.root, style]}>
    {children}
  </TouchableOpacity>
);

export default Button;
