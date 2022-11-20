import { useCallback, useMemo, useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListType } from '@types';
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectCountries } from '@store/selectors/countrySelector';
import { getCountryByName } from '@store/slices/countrySlice';
import { Button, Paragraph } from '@components/atoms';
import Header from './Header';
import CountryList from './CountryList';
import styles from './style';

const Country = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamListType, 'Country'>) => {
  const { params } = route;
  const { goBack } = navigation;
  const dispatch = useAppDispatch();
  const isDark = useColorScheme() !== 'light';
  const themeStyles = useMemo(() => styles(isDark), [isDark]);
  const values = useMemo(() => params, [params]);

  const countries = useAppSelector(selectCountries);

  const [country, setCountry] = useState<string | null>(null);

  const onSearch = useCallback((data: string) => {
    dispatch(getCountryByName(data));
  }, [dispatch]);

  const selectCountry = useCallback((value: string) => {
    if (country !== value) {
      setCountry(value);
    }
  }, [country]);

  const submit = useCallback(() => {
    console.log({ country, ...values });
  }, [country, values]);

  return (
    <View style={themeStyles.root}>
      <Header isDark={isDark} onSearch={onSearch} back={goBack} />
      <CountryList isDark={isDark} selectedCountry={country} select={selectCountry} data={countries} />
      <Button
        onPress={submit}
        disabled={!Boolean(country)}
        style={[themeStyles.btn, !Boolean(country) && themeStyles.btnDisabled]}
      >
        <Paragraph style={[themeStyles.btnText, Boolean(country) && themeStyles.btnLightText]}>
          Next
        </Paragraph>
      </Button>
    </View>
  );
};

export default Country;
