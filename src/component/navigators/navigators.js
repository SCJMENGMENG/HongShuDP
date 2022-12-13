import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabBarNavigator from '../tabbar/tabbar';
import PictureDetailPage from '../../page/picture/PictureDetailPage';
import VideoDetailPage from '../../page/video/VideoDetailPage';
import LunchPage from '../../page/lunch/LunchPage';
import LoginPage from '../../page/login/LoginPage';

const AppNavigator = createStackNavigator(
  {
    TabBarNavigator: {screen: TabBarNavigator,
      navigationOptions:{
      header:null,
    }},
      PictureDetail: {screen: PictureDetailPage},
      VideoDetail: {screen: VideoDetailPage},
  },
  {
    initialRouteName: 'TabBarNavigator',
    defaultNavigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'cyan',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
    },
    onTransitionStart: () => {},
    onTransitionEnd: () => {},
  },
);

const LunchNavigator = createStackNavigator(
    {
      LunchPage:{
        screen:LunchPage,
        navigationOptions: {
          header: null,
          gestureEnabled: false
        }
      }
    }
)

const LoginNavigator = createStackNavigator(
    {
      LoginPage:{
        screen:LoginPage,
        navigationOptions:{
          header: null,
          gestureEnabled:false
        }
      },
    }
)

const SwitchNavigator = createSwitchNavigator(
    {
      LoginRoute:{screen:LoginNavigator},
      LunchRoute:{screen:LunchNavigator},
      AppRoute:{screen:AppNavigator}
    },
    {
      initialRouteName:'LunchRoute'
    }
)

export default createAppContainer(SwitchNavigator);
