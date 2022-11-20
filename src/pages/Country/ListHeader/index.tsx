import { useMemo, memo } from 'react';
import { Heading } from '@components/atoms';
import styles from './style';

interface IProps {
  label: string;
  isDark: boolean;
}

const ListHeader = ({
  label,
  isDark,
}: IProps) => {
  const themedStyle = useMemo(() => styles(isDark), [isDark]);

  return (
    <Heading size={4} style={themedStyle.root}>
      {label}
    </Heading>
  );
};

export default memo(ListHeader);
