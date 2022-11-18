import { useMemo } from 'react';
import { View, useColorScheme } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validation),
  });

  const toggleRemember = (checked: boolean) => setValue('remember', checked);

  const onFormSuccess = async (values: ISignInForm) => {
    try {
      dispatch(signIn(values));
    } catch (e) {
      console.log('client', e);
    }
  };

  return (
    <View style={[styles.root, isDark && styles.dark]}>
      <Intro />
      <LoginForm
        control={control}
        toggleRemember={toggleRemember}
        submit={handleSubmit((onFormSuccess))}
      />
    </View>
  );
};

export default SignIn;
