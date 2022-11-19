import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './style';

interface IProps {
  children: ReactNode;
  onPress: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  children,
  onPress,
  style,
  disabled,
}: IProps) => (
  <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.root, style]}>
    {children}
  </TouchableOpacity>
);

export default Button;
