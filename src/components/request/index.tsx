import React, { memo } from 'react';

import { RootStateOrAny, useSelector } from 'react-redux';
import _ from 'lodash';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import style from './style';

const loader = require('@assets/lottie/animation.json');

const RequestComponent = memo(() => {
  // Redux
  const queue = useSelector(({ common }: RootStateOrAny) => common.queue);
  // Check show
  const isShow = !_.isEmpty(queue);

  if (!isShow) return <></>;

  return (
    <View style={style.container}>
      <LottieView source={loader} autoPlay loop style={style.gif} speed={2} />
      <View style={style.overlay} />
    </View>
  );
});

export { RequestComponent };
