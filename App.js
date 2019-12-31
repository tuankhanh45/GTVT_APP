/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import TestLoginScreen from './src/screen/TestLoginScreen';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <TestLoginScreen />
    </View>
  );
};

export default App;
