import { IGroupByName } from '@types';

export const groupByName = (data: string[]): IGroupByName[] => {
  const map = new Map();
  const result: IGroupByName[] = [];

  data.forEach(item => {
    const character = item[0];

    if (map.has(character)) {
      map.set(character, [...map.get(character), item]);
    } else {
      map.set(character, [item]);
    }
  });

  const keys = Array.from(map.keys());

  keys.forEach(key => {
    result.push({
      title: key,
      data: map.get(key),
    });
  });

  return result;
};
