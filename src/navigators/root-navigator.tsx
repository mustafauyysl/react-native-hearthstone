import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './main-navigator';
// Root Navigation
import { navigationRef, routeNameRef } from '../utils/RootNavigation';

// state Change
const onStateChange = async () => {
  const previousRouteName = routeNameRef.current;
  const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

  // Save the current route name for later comparison
  routeNameRef.current = currentRouteName;
};

const onReady = () => {
  routeNameRef.current = navigationRef.current.getCurrentRoute().name;
};

export const RootNavigator = (props) => {
  return (
    <NavigationContainer ref={navigationRef} onReady={onReady} onStateChange={onStateChange} {...props}>
      <MainNavigator />
    </NavigationContainer>
  );
};

RootNavigator.displayName = 'RootNavigator';
