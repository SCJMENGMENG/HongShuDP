import React, {Component} from 'react';
import {Image,View,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import PicturePage from '../../page/picture/PicturePage';
import VideoPage from '../../page/video/VideoPage';

const RouteConfigs = {
  PicturePage: {
    screen: PicturePage,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '图文',
      tabBarIcon: ({focused, tintColor}) => <Image style={{width:30,height:30}} source={focused ? require('../../source/imgs/tab_home_select.png') : require('../../source/imgs/tab_home.png')} resizeMode="contain"/>,
      tabBarOnPress: obj => {
        console.log('chat tabbar press!', obj);
        obj.defaultHandler();
      },
    }),
  },
  VideoPage: {
    screen: VideoPage,
    navigationOptions: ({navigation}) => ({
      // tabBarLabel: '我的',
      // tabBarIcon: ({focused, tintColor}) => <Image style={{width:30,height:30}} source={focused ? require('../tab_mine_select.png') : require('../tab_mine.png')}/>,
      tabBarLabel: ()=>null,
      tabBarIcon: ({focused, tintColor}) => (<View style = {{backgroundColor: focused ? 'red' : 'green', flex: 1}}><Text>视频</Text></View>),
      tabBarOnPress: async obj => {
        console.log('my tabbar press!', obj);
        obj.defaultHandler();
      },
    }),
  },
};

const TabNavigatorConfig = {
  initialRouteName: 'PicturePage',
  tabBarPosition: 'bottom',
  animationEnable: true,
  lazy: true,
};

const TabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default TabNavigator;
