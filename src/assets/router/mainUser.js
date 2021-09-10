import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigator from './../components/BottomNavigator';
import Home from './../pages/Home';
import Favorite from './../pages/Favorite';
import Notification from './../pages/Notification';
import Profile from './../pages/Profile';

const MainUser = createBottomTabNavigator();

function mainUser({navigation}) {
  return (
    <MainUser.Navigator
      headerMode="none"
      tabBar={props => <BottomNavigator {...props} />}>
      <MainUser.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <MainUser.Screen
        options={{headerShown: false}}
        name="Favorite"
        component={Favorite}
      />
      <MainUser.Screen
        options={{headerShown: false}}
        name="Notification"
        component={Notification}
      />
      <MainUser.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </MainUser.Navigator>
  );
}

export default mainUser;
