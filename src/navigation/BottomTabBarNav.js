import React from 'react';
import {Platform, View, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screen/LoginScreen';
import PostScreen from '../screen/PostScreen';
import DetailsPostScreen from '../screen/DetailsPostScreen';
import DocumentScreen from '../screen/DocumentScreen';

import cl from '../assets/colors/Color';

// Post stack

const PostStack = createStackNavigator({
  Post: PostScreen,
  DetailsPost: DetailsPostScreen,
});
PostStack.navigationOptions = {
  tabBarLabel: 'Kho ảnh',
  tabBarIcon: ({focused}) => (
    <Image
      source={require('../assets/images/account.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginBottom: -3,
        height: 40,
        width: 40,
        tintColor: focused ? cl.IconTabBarActive : cl.IconTabBarDeActive,
      }}
    />
  ),
};
PostStack.path = '';

//  Document stack

const DocumentStack = createStackNavigator({
  Document: DocumentScreen,
});
DocumentStack.navigationOptions = {
  tabBarLabel: 'Tài liệu',
  tabBarIcon: ({focused}) => (
    <Image
      source={require('../assets/images/feed.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginTop: 5,
        height: 40,
        width: 40,
        tintColor: focused ? cl.IconTabBarActive : cl.IconTabBarDeActive,
      }}
    />
  ),
};
DocumentStack.path = '';

// Creat bottom tab bar

const BottomTabNavigator = createBottomTabNavigator(
  {
    PostStack,
    DocumentStack,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: cl.TabBarBackground,
        borderColor: cl.TabBarBorder,
        borderWidth: 0.5,
        height: 60,
      },
      activeTintColor: cl.IconTabBarActive,
      inactiveTintColor: cl.IconTabBarDeActive,
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 14,
      },
    },
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: 'none',
    mode: 'modal',
    cardStyle: {
      opacity: 1,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator({main: BottomTabNavigator}),
);
