import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';

import type {StaticParamList} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/pages/Home';
import WritePage from './src/pages/Write';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomePage,
    Write: WritePage,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Navigation />
    </GestureHandlerRootView>
  );
}

export default App;
