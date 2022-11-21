import { Fragment, useMemo, useRef, useState } from 'react';
import { StyleProp, TextInput, TextStyle, useColorScheme, View } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { EColors, InputTypes } from '@types';
import { getKeyboardType } from '@utils';
import { Button, Paragraph } from '@components/atoms';
import { AlertIcon, EyeIcon, RemoveIcon } from '@components/icons';

import styles from './style';

interface IProps {
  name: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  control: Control<any>;
  type?: InputTypes;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  showEye?: boolean;
  multiline?: boolean;
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
  showEye,
  multiline,
  style,
}: IProps) => {
  const theme = useColorScheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);
  const inputRef = useRef<TextInput | null>(null);
  const [isSecure, setIsSecure] = useState<boolean>(type === 'password');

  const clear = () => {
    if (!inputRef.current) return;

    inputRef.current.clear();
  };

  const toggleSymbols = () => setIsSecure(prevState => !prevState);

  return (
    <Fragment>
      {!!label && (
        <Paragraph style={[styles.label, isDark && styles.labelDark]}>
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
          formState: { errors },
        }) => (
          <View style={styles.inputBox}>
            <TextInput
              ref={inputRef}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              defaultValue={defaultValue}
              placeholder={placeholder}
              keyboardType={getKeyboardType(type)}
              secureTextEntry={isSecure}
              multiline={multiline}
              numberOfLines={1}
              style={[
                styles.input,
                multiline && styles.area,
                style,
                isDark && styles.inputDark,
                errors[name] && styles.inputError,
              ]}
            />
            {showEye && !errors[name] && (
              <Button onPress={toggleSymbols} style={styles.inputBtn}>
                <EyeIcon fill={!isDark ? EColors.black : EColors.bodyDark} />
              </Button>
            )}
            {errors[name] && (
              <Fragment>
                <Button onPress={clear} style={styles.inputBtn}>
                  <RemoveIcon />
                </Button>
                <View style={styles.errorBox}>
                  <AlertIcon />
                  <Paragraph style={styles.errorMessage}>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    {errors[name].message}
                  </Paragraph>
                </View>
              </Fragment>
            )}
          </View>
        )}
      />
    </Fragment>
  );
};

export default InputField;
