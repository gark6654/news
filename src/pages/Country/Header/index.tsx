import { useMemo } from 'react';
import { View } from 'react-native';
import { ArrowIcon } from '@components/icons';
import { Button, Heading, SearchInput } from '@components/atoms';
import styles from './style';
import { EColors } from '@types';

interface IProps {
  isDark: boolean;
  onSearch: (value: string) => void;
  back: () => void;
}

const Header = ({
  isDark,
  onSearch,
  back,
}: IProps) => {
  const themedStyle = useMemo(() => styles(isDark), [isDark]);

  return (
    <View style={themedStyle.root}>
      <View style={themedStyle.wrapper}>
        <Button onPress={back} style={themedStyle.backBtn}>
          <ArrowIcon direction="left" fill={isDark ? EColors.white : EColors.black} />
        </Button>
        <Heading size={4} style={themedStyle.heading}>
          Select your country
        </Heading>
      </View>
      <SearchInput isDark={isDark} onChange={onSearch} />
    </View>
  );
};

export default Header;
