import { useMemo } from 'react';
import { View } from 'react-native';
import { Heading, SearchInput } from '@components/atoms';
import styles from './style';

interface IProps {
  isDark: boolean;
  onSearch: (value: string) => void;
}

const Header = ({
  isDark,
  onSearch,
}: IProps) => {
  const themedStyle = useMemo(() => styles(isDark), [isDark]);

  return (
    <View style={themedStyle.root}>
      <Heading size={4}>Select your country</Heading>
      <SearchInput isDark={isDark} onChange={onSearch} />
    </View>
  );
};

export default Header;
