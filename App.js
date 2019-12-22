/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';

import BottomTabBarNav from './src/navigation/BottomTabBarNav';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTabBarNav />
    </View>
  );
};

export default App;
