import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
// Modules
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { actionGetAllCards, actionSearchCard } from '../../state/card/actions';
import _ from 'lodash';
// Components
import { Card, Input } from '../../components';

export const HomeScreen = () => {
  // State
  const [searchText, setSearchText] = useState('');
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const { data } = useSelector((state: RootStateOrAny) => state.card);

  useEffect(() => {
    if (searchText === '') {
      dispatch(actionGetAllCards());
    } else {
      const timeoutId = setTimeout(() => dispatch(actionSearchCard({ text: searchText })), 300);
      return () => clearTimeout(timeoutId);
    }
  }, [searchText]);

  // Render Cards
  const renderCards = (item: string, i: number) => !_.isEmpty(item) && <Card item={item} key={i} />;

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <Input placeholder="Search.." value={searchText} onChangeText={(text: string) => setSearchText(text)} />
        }
        showsVerticalScrollIndicator={false}
        data={Object.values(data)}
        renderItem={({ item, i }: any) => renderCards(item, i)}
      />
    </View>
  );
};
