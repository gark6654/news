import { useCallback, useMemo, useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { ISignInForm, RootStackParamListType } from '@types';
import { useAppDispatch } from '@hooks';
import { login } from '@store/thunks/authThunk';
import Intro from './Intro';
import LoginForm from './LoginForm';
import validation from './validation';

import styles from './style';

const SignIn = ({}: NativeStackScreenProps<RootStackParamListType, 'SignIn'>) => {
  const dispatch = useAppDispatch();
  const isDark = useColorScheme() !== 'light';
  const themeStyles = useMemo(() => styles(isDark), [isDark]);

  const {
    control,
    setValue,
    handleSubmit,
    setError,
  } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validation),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleRemember = (checked: boolean) => setValue('remember', checked);

  const signInError = useCallback((e: AxiosError) => {
    if (e.response?.status === 403) {
      setError('email', { message: 'Email or Password is not valid' });
      setError('password', { message: 'Email or Password is not valid' });
    }

    setIsLoading(false);
  }, [setError]);

  const onFormSuccess = useCallback(async (values: ISignInForm) => {
    setIsLoading(true);

    await dispatch(login({
      credentials: values,
      onError: signInError,
    }));

    setIsLoading(false);
  }, [dispatch, signInError]);

  return (
    <View style={themeStyles.root}>
      <Intro />
      <LoginForm
        control={control}
        toggleRemember={toggleRemember}
        submit={handleSubmit((onFormSuccess))}
        isLoading={isLoading}
      />
    </View>
  );
};

export default SignIn;
