import { useMemo } from 'react';
import { useColorScheme, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Lottie from 'lottie-react-native';
import { RootStackParamListType } from '@types';
import RiderAnim from '@constants/lottieAnimations/rider.json';

import styles from './style';

const Loading = ({}: NativeStackScreenProps<RootStackParamListType, 'Loading'>) => {
  const isDark = useColorScheme() !== 'light';
  const themeStyles = useMemo(() => styles(isDark), [isDark]);

  return (
    <View style={themeStyles.root}>
      <Lottie source={RiderAnim} autoPlay loop />
    </View>
  );
};

export default Loading;
