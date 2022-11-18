import { useMemo } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Lottie from 'lottie-react-native';
import { RootStackParamListType } from '@types';
import RiderAnim from '@constants/lottieAnimations/rider.json';

import styles from './style';

const Loading = ({ route }: NativeStackScreenProps<RootStackParamListType, 'Loading'>) => {
  const { params } = route;
  const themeStyles = useMemo(() => styles(params.isDark), [params]);

  return (
    <View style={themeStyles.root}>
      <Lottie source={RiderAnim} autoPlay loop />
    </View>
  );
};

export default Loading;
