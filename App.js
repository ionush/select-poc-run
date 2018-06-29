import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search-outline" color={tintColor} size={24} />
        ),
      },
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: 'CHAT',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart-outline" color={tintColor} size={24} />
        ),
      },
    },

    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'INBOX',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
        ),
      },
    },
    Profile: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person-outline" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
