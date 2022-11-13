import { ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { ISignInForm } from '@types';
import Intro from './Intro';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import styles from './style';

const SignIn = () => {
  const {
    control,
    setValue,
  } = useForm<ISignInForm>({
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
  });

  const toggleRemember = (checked) => setValue('remember', checked);

  return (
    <View style={styles.root}>
      <Intro />
      <ScrollView>
        <LoginForm control={control} toggleRemember={toggleRemember} />
        <SignUp />
      </ScrollView>
    </View>
  );
};

export default SignIn;
