import React from 'react';
import { View, Pressable, Text } from 'react-native';
// Modules
import _ from 'lodash';
// Props
import { CardProps } from './card.props';
// Style
import style from './style';
import { useNavigation } from '@react-navigation/native';

const Card = (props: CardProps) => {
  // Props
  const { item } = props;

  // Navigation
  const navigation = useNavigation();

  // Navigate Detail Screen
  const goDetail = (item: Object) => navigation.navigate('detailScreen', { item: item[0] || item });

  return (
    <Pressable style={style.item} onPress={() => goDetail(item)}>
      <Text>{item[0]?.name || item?.name}</Text>
    </Pressable>
  );
};

export { Card };
