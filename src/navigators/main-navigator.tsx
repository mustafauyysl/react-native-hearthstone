import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailScreen } from '../screens';
// Hocs
import { withNetwork } from '../hocs';
// Style
import { colors } from '../theme';

export type PrimaryParamList = {
  homeScreen: undefined;
  detailScreen: undefined;
};

const Stack = createStackNavigator<PrimaryParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.brown,
          },
          headerTintColor: colors.white,
          title: 'Cards',
        }}
      />
      <Stack.Screen
        name="detailScreen"
        component={DetailScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.brown,
          },
          headerTintColor: colors.white,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = withNetwork(Navigator);

export { MainNavigator };

const exitRoutes = ['bottomTab'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
