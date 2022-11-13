import { Fragment } from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { InputTypes } from '@types';
import { getKeyboardType } from '@utils';
import { Paragraph } from '@components/atoms';
import styles from './style';

interface IProps {
  name: string;
  control: Control;
  type?: InputTypes;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  style?: StyleProp<TextStyle>;
}

const InputField = ({
  name,
  control,
  type = 'text',
  label,
  defaultValue,
  placeholder,
  required,
  style,
}: IProps) => (
  <Fragment>
    {!!label && (
      <Paragraph style={styles.label}>
        {label}
        {required && (
          <Paragraph style={styles.required}>
            *
          </Paragraph>
        )}
      </Paragraph>
    )}
    <Controller
      name={name}
      control={control}
      render={({
        field: {
          onBlur,
          onChange,
          value,
        },
      }) => (
        <TextInput
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          defaultValue={defaultValue}
          placeholder={placeholder}
          keyboardType={getKeyboardType(type)}
          secureTextEntry={type === 'password'}
          style={[styles.input, style]}
        />
      )}
    />
  </Fragment>
);

export default InputField;
