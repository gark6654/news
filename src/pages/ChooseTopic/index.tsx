import { useCallback, useMemo, useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListType } from '@types';
import { useAppDispatch } from '@hooks';
import { Button, Paragraph } from '@components/atoms';
import Header from './Header';
import TopicList from './TopicList';
import styles from './style';

const TOPICS = [
  {
    _id: '1',
    name: 'National',
  },
  {
    _id: '2',
    name: 'International',
  },
  {
    _id: '3',
    name: 'Sport',
  },
  {
    _id: '4',
    name: 'Lifestyle',
  },
  {
    _id: '5',
    name: 'Business',
  },
  {
    _id: '6',
    name: 'Health',
  },
  {
    _id: '7',
    name: 'Fashion',
  },
  {
    _id: '8',
    name: 'Technology',
  },
  {
    _id: '9',
    name: 'Science',
  },
  {
    _id: '10',
    name: 'Art',
  },
  {
    _id: '11',
    name: 'Politics',
  },
];

const ChooseTopic = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamListType, 'ChooseTopic'>) => {
  const { params } = route;
  const {
    goBack,
    navigate,
  } = navigation;
  const dispatch = useAppDispatch();
  const isDark = useColorScheme() !== 'light';
  const themeStyles = useMemo(() => styles(isDark), [isDark]);
  const values = useMemo(() => params, [params]);

  const [topics, setTopics] = useState<string[]>([]);

  const selectTopic = useCallback((id: string) => {
    if (topics.includes(id)) {
      setTopics(prevState => prevState.filter(topic => topic !== id));
      return;
    }

    setTopics(prevState => [...prevState, id]);
  }, [topics]);

  const onSearch = useCallback((data: string) => {
  }, []);

  const submit = useCallback(() => {
    const data = {
      ...values,
      topics,
    };

    console.log(data);
  }, [topics, values]);

  return (
    <View style={themeStyles.root}>
      <Header isDark={isDark} onSearch={onSearch} back={goBack} />
      <TopicList isDark={isDark} topics={TOPICS} selectedTopics={topics} select={selectTopic} />
      <Button
        onPress={submit}
        disabled={!Boolean(topics.length)}
        style={[themeStyles.btn, !Boolean(topics.length) && themeStyles.btnDisabled]}
      >
        <Paragraph style={[themeStyles.btnText, Boolean(topics.length) && themeStyles.btnLightText]}>
          Next
        </Paragraph>
      </Button>
    </View>
  );
};

export default ChooseTopic;
