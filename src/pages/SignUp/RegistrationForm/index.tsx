import { ScrollView, View } from 'react-native';
import { Control } from 'react-hook-form';
import { ISignUpForm } from '@types';
import { Button, InputField, InternalLink, Paragraph } from '@components/atoms';
import styles from './style';

interface IProps {
  control: Control<ISignUpForm>;
  isLoading: boolean;
  isDark: boolean;
  submit: () => void;
}

const RegistrationForm = ({
  control,
  isLoading,
  isDark,
  submit,
}: IProps) => (
  <ScrollView style={styles.root}>
    <View>
      <InputField name="email" control={control} label="Email" type="email" required />
      <InputField name="password" control={control} label="Password" type="password" required showEye />
      <InputField name="confirm" control={control} label="Confirm Password" type="password" required showEye />
    </View>
    <Button onPress={submit} disabled={isLoading}>
      <View style={styles.submitBtn}>
        <Paragraph style={styles.submitText}>Sign Up</Paragraph>
      </View>
    </Button>
    <View style={styles.questionBox}>
      <Paragraph style={[styles.question, isDark && styles.questionDark]}>
        Have an account ?
      </Paragraph>
      <InternalLink to="SignIn">
        <Paragraph style={styles.link}>Sign in</Paragraph>
      </InternalLink>
    </View>
  </ScrollView>
);

export default RegistrationForm;
