import { ReactNode, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { RootStackParamListType } from '@types';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  to: keyof RootStackParamListType;
  children: ReactNode;
}

const InternalLink = ({
  to,
  children,
}: IProps) => {
  const { navigate } = useNavigation();

  const redirect = useCallback(() => {
    navigate(to as never, {} as never);
  }, [navigate, to]);

  return (
    <TouchableOpacity onPress={redirect}>
      {children}
    </TouchableOpacity>
  );
};

export default InternalLink;
