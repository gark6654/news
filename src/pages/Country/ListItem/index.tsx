import { useMemo } from 'react';
import { Button, Paragraph } from '@components/atoms';
import styles from './style';

interface IProps {
  label: string;
  isDark: boolean;
  select: (country: string) => void;
  active?: boolean;
}

const ListItem = ({
  isDark,
  label,
  select,
  active,
}: IProps) => {
  const themedStyle = useMemo(() => styles(isDark), [isDark]);

  return (
    <Button onPress={() => select(label)} style={[themedStyle.root, active && themedStyle.active]}>
      <Paragraph style={[themedStyle.text, active && themedStyle.activeText]}>
        {label}
      </Paragraph>
    </Button>
  );
};

export default ListItem;
