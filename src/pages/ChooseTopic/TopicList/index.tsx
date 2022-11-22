import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { ITopic } from '@types';
import { TopicButton } from '@components/molecules';
import styles from './style';

interface IProps {
  isDark: boolean;
  topics: ITopic[];
  selectedTopics: string[];
  select: (id: string) => void;
}

const TopicList = ({
  isDark,
  topics,
  selectedTopics,
  select,
}: IProps) => {
  const themeStyles = useMemo(() => styles(isDark), [isDark]);

  return (
    <ScrollView style={themeStyles.root}>
      <View style={themeStyles.wrapper}>
        {topics.map(({
          _id,
          name,
        }) => (
          <TopicButton key={_id} id={_id} label={name} select={select} active={selectedTopics.includes(_id)} />
        ))}
      </View>
    </ScrollView>
  );
};

export default TopicList;
