import React from 'react';
import { Text } from 'react-native';

interface IProps {
  children: string;
}

const Paragraph = ({ children }: IProps) => (
  <Text>
    {children}
  </Text>
);

export default Paragraph;
