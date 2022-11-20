import { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListType } from '@types';
import Header from './Header';
import styles from './style';

const Country = ({ route }: NativeStackScreenProps<RootStackParamListType, 'Country'>) => {
  const { params } = route;
  const {
    isDark,
    themedStyle,
  } = useMemo(() => ({
    isDark: params.isDark,
    themedStyle: styles(params.isDark),
  }), [params]);

  const onSearch = useCallback((data: string) => {
    console.log(data);
  }, []);

  return (
    <View style={themedStyle.root}>
      <Header isDark={isDark} onSearch={onSearch} />
    </View>
  );
};

export default Country;
