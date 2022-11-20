import { ReactNode, useCallback } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { RootStackParamListType } from '@types';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  to: keyof RootStackParamListType;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const InternalLink = ({
  to,
  children,
  style,
}: IProps) => {
  const { navigate } = useNavigation();

  const redirect = useCallback(() => {
    navigate(to as never, {} as never);
  }, [navigate, to]);

  return (
    <TouchableOpacity onPress={redirect} style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default InternalLink;
