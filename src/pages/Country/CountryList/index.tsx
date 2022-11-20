import { memo, useMemo } from 'react';
import { SectionList, View } from 'react-native';
import { IGroupByName } from '@types';
import ListItem from '../ListItem';
import ListHeader from '../ListHeader';
import styles from './style';

interface IProps {
  data: IGroupByName[];
  isDark: boolean;
  selectedCountry: string | null;
  select: (country: string) => void;
}

const CountryList = ({
  data,
  isDark,
  selectedCountry,
  select,
}: IProps) => {
  const list = useMemo(() => data, [data]);
  const themedStyle = useMemo(() => styles(isDark), [isDark]);

  return (
    <View style={themedStyle.root}>
      <SectionList
        keyExtractor={(item, index) => `country${item + index}`}
        sections={list}
        renderItem={({ item }) => (
          <ListItem label={item} isDark={isDark} select={select} active={selectedCountry === item} />
        )}
        renderSectionHeader={({ section }) => <ListHeader label={section.title} isDark={isDark} />}
      />
    </View>
  );
};

export default memo(CountryList);
