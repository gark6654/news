import { View } from 'react-native';
import { Control } from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { EColors } from '@types';
import { Button, InputField, InternalLink, Paragraph } from '@components/atoms';
import styles from './style';

interface IProps {
  control: Control;
  toggleRemember: (checked: boolean) => void;
}

const LoginForm = ({
  control,
  toggleRemember,
}: IProps) => (
  <View style={styles.root}>
    <View>
      <InputField
        name="Username"
        control={control}
        label="username"
        type="text"
        required
      />
      <InputField
        name="Password"
        control={control}
        label="Password"
        type="password"
        required
      />
    </View>
    <View style={styles.questionWrapper}>
      <View style={styles.checkboxWrapper}>
        <BouncyCheckbox fillColor={EColors.primary} onPress={toggleRemember} />
        <Paragraph style={styles.checkboxText}>Remember me</Paragraph>
      </View>
      <InternalLink to="Home">
        <Paragraph style={styles.forgot}>Forgot the password?</Paragraph>
      </InternalLink>
    </View>
    <Button onPress={() => console.log('hello')}>
      <View style={styles.submitBtn}>
        <Paragraph style={styles.submitText}>
          Login
        </Paragraph>
      </View>
    </Button>
  </View>
);

export default LoginForm;
