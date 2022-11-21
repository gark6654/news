import { useMemo } from 'react';
import { View } from 'react-native';
import { EColors } from '@types';
import { ArrowIcon } from '@components/icons';
import { Button, Heading } from '@components/atoms';
import styles from './style';

interface IProps {
  isDark: boolean;
  back: () => void;
}

const Header = ({
  isDark,
  back,
}: IProps) => {
  const themedStyle = useMemo(() => styles(isDark), [isDark]);

  return (
    <View style={themedStyle.root}>
      <Button onPress={back} style={themedStyle.backBtn}>
        <ArrowIcon direction="left" fill={isDark ? EColors.white : EColors.black} />
      </Button>
      <Heading size={4} style={themedStyle.heading}>
        Fill your profile
      </Heading>
    </View>
  );
};

export default Header;
