import { useMemo } from 'react';
import { ScrollView, useColorScheme, View } from 'react-native';
import { Control } from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { EColors, ISignInForm } from '@types';
import { Button, InputField, InternalLink, Paragraph } from '@components/atoms';
import styles from './style';

interface IProps {
  control: Control<ISignInForm>;
  toggleRemember: (checked: boolean) => void;
  submit: () => void;
}

const LoginForm = ({
  control,
  toggleRemember,
  submit,
}: IProps) => {
  const theme = useColorScheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <ScrollView style={styles.root}>
      <View>
        <InputField name="username" control={control} label="username" type="text" required />
        <InputField name="password" control={control} label="Password" type="password" required showEye />
      </View>
      <View style={styles.questionWrapper}>
        <View style={styles.checkboxWrapper}>
          <BouncyCheckbox fillColor={EColors.primary} onPress={toggleRemember} />
          <Paragraph style={[styles.checkboxText, isDark && styles.checkboxTextDark]}>Remember me</Paragraph>
        </View>
        <InternalLink to="Home">
          <Paragraph style={styles.forgot}>Forgot the password?</Paragraph>
        </InternalLink>
      </View>
      <Button onPress={submit}>
        <View style={styles.submitBtn}>
          <Paragraph style={styles.submitText}>Login</Paragraph>
        </View>
      </Button>
      <View style={styles.questionBox}>
        <Paragraph style={[styles.question, isDark && styles.questionDark]}>
          Don't have an account ?
        </Paragraph>
        <InternalLink to="Home">
          <Paragraph style={styles.link}>Sign up</Paragraph>
        </InternalLink>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
