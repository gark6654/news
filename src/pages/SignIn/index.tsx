import { useCallback, useMemo, useState } from 'react';
import { View, useColorScheme } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { ISignInForm } from '@types';
import { useAppDispatch } from '@hooks';
import { signIn } from '@store/thunks/authThunk';
import Intro from './Intro';
import LoginForm from './LoginForm';
import validation from './validation';

import styles from './style';

const SignIn = () => {
  const dispatch = useAppDispatch();

  const theme = useColorScheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);
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

    await dispatch(signIn({
      credentials: values,
      onError: signInError,
    }));

    setIsLoading(false);
  }, [dispatch, signInError]);

  return (
    <View style={[styles.root, isDark && styles.dark]}>
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
