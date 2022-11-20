import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { useDebounce } from '@hooks';
import styles from './style';

interface IProps {
  isDark: boolean;
  onChange: (value: string) => void;
  debounced?: boolean;
  debounceTime?: number;
  defaultValue?: string;
  placeholder?: string;
}

const SearchInput = ({
  isDark,
  defaultValue,
  placeholder = 'Search...',
  debounced = true,
  debounceTime = 500,
  onChange,
}: IProps) => {
  const themedStyle = useMemo(() => styles(isDark), [isDark]);
  const [value, setValue] = useState<string>(defaultValue ?? '');
  const debouncedValue = debounced ? useDebounce(value, debounceTime) : '';

  const handleChange = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;

    if (!debounced) {
      onChange(value);
    }

    setValue(value);
  }, [debounced, onChange]);

  useEffect(() => {
    if (!debounced) {
      return;
    }

    onChange(debouncedValue);
  }, [debounced, debouncedValue, onChange]);

  return (
    <View style={themedStyle.root}>
      <TextInput
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SearchInput;
