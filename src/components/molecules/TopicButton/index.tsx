import { Button, Paragraph } from '@components/atoms';
import styles from './style';

interface IProps {
  id: string;
  label: string;
  active: boolean;
  select: (id: string) => void;
}

const TopicButton = ({
  id,
  label,
  active,
  select,
}: IProps) => (
  <Button onPress={() => select(id)} style={[styles.root, active && styles.active]}>
    <Paragraph style={[styles.text, active && styles.activeText]}>
      {label}
    </Paragraph>
  </Button>
);

export default TopicButton;
