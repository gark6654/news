import { useCallback, useMemo, useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { ISignUpForm, RootStackParamListType } from '@types';
import { useAppDispatch } from '@hooks';
import { login } from '@store/thunks/authThunk';
import Intro from './Intro';
import RegistrationForm from './RegistrationForm';
import validation from './validation';

import styles from './style';

const SignUp = ({ navigation }: NativeStackScreenProps<RootStackParamListType, 'SignUp'>) => {
  const { navigate } = navigation;
  const dispatch = useAppDispatch();
  const isDark = useColorScheme() !== 'light';
  const themeStyles = useMemo(() => styles(isDark), [isDark]);

  const {
    control,
    handleSubmit,
    setError,
  } = useForm<ISignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validation),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInError = useCallback((e: AxiosError) => {
    if (e.response?.status === 403) {
      setError('email', { message: 'Email or Password is not valid' });
      setError('password', { message: 'Email or Password is not valid' });
    }

    setIsLoading(false);
  }, [setError]);

  const onFormSuccess = useCallback(async (values: ISignUpForm) => {
    setIsLoading(true);

    if (values) {
      setIsLoading(false);
      navigate('Country', values);
      return;
    }

    await dispatch(login({
      credentials: values,
      onError: signInError,
    }));

    setIsLoading(false);
  }, [dispatch, navigate, signInError]);

  return (
    <View style={themeStyles.root}>
      <Intro />
      <RegistrationForm
        control={control}
        isLoading={isLoading}
        isDark={isDark}
        submit={handleSubmit((onFormSuccess))}
      />
    </View>
  );
};

export default SignUp;
