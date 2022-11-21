import { useCallback, useMemo, useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFillForm, RootStackParamListType } from '@types';
import validationSchema from './validation';
import { Button, Paragraph } from '@components/atoms';
import Header from './Header';
import Form from './Form';
import styles from './style';

const FillProfile = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamListType, 'FillProfile'>) => {
  const theme = useColorScheme();
  const { params } = route;
  const { goBack } = navigation;
  const {
    handleSubmit,
    control,
  } = useForm<IFillForm>({
    resolver: yupResolver(validationSchema),
  });

  const data = useMemo(() => params, [params]);
  const {
    themeStyles,
    isDark,
  } = useMemo(() => ({
    isDark: theme === 'dark',
    themeStyles: styles(theme === 'dark'),
  }), [theme]);

  const [] = useState<boolean>(false);

  const onFormSuccess = useCallback((values: IFillForm) => {
    console.log({
      ...values,
      ...data,
    });
  }, [data]);

  return (
    <View style={themeStyles.root}>
      <Header isDark={isDark} back={goBack} />
      <Form control={control} />
      <Button
        onPress={handleSubmit(onFormSuccess)}
        style={themeStyles.btn}
      >
        <Paragraph style={themeStyles.btnText}>
          Next
        </Paragraph>
      </Button>
    </View>
  );
};

export default FillProfile;
