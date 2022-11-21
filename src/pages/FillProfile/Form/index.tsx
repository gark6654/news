import { ScrollView } from 'react-native';
import { Control } from 'react-hook-form';
import { IFillForm } from '@types';
import { InputField } from '@components/atoms';
import styles from './style';

interface IProps {
  control: Control<IFillForm>;
}

const Form = ({
  control,
}: IProps) => (
  <ScrollView style={styles.root}>
    <InputField name="firstname" label="Firstname" control={control} required />
    <InputField name="lastname" label="Lastname" control={control} required />
    <InputField name="website" label="Website" control={control} />
    <InputField name="bio" label="Bio" control={control} multiline />
  </ScrollView>
);

export default Form;
