import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
// Modules
import { useNavigation, useRoute } from '@react-navigation/core';
import HTML from 'react-native-render-html';
import { decode } from 'html-entities';
// Style
import style from './style';
import _ from 'lodash';

export const DetailScreen = () => {
  // Navigation
  const navigation = useNavigation();
  // Route
  const route = useRoute();
  // Params
  const { item }: any = route?.params ?? {};

  useEffect(() => {
    navigation.setOptions({
      title: item?.name,
    });
  }, []);

  return (
    <View style={style.full}>
      <Image
        style={style.img}
        resizeMode="contain"
        source={item?.img ? { uri: item?.img } : require('../../assets/img/noImage.png')}
      />
      <Text>{'Name: ' + item?.name}</Text>
      <Text>{'Card Set: ' + item?.cardSet}</Text>
      <Text>{'Type: ' + item?.type}</Text>
      {item?.cost && <Text>{'Cost: ' + item?.cost}</Text>}
      {item?.atack && <Text>{'Atack: ' + item?.atack}</Text>}
      {item?.health && <Text>{'Health: ' + item?.health}</Text>}
      {item?.text && (
        <>
          <Text>Description: </Text>
          <HTML source={{ html: decode(item?.text || '<p></p>') }} />
        </>
      )}
    </View>
  );
};
