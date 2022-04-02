import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Explore from '../screens/explore';
import Radio from '../screens/radio';
import Account from '../screens/ account';
import {Colors, Image, TouchableOpacity, Assets} from 'react-native-ui-lib';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.n2,
        tabBarStyle: {
          backgroundColor: '#0E0B1F',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            return <Image assetName="iconTabHome" tintColor={color} />;
          },
          headerStyle: {
            backgroundColor: '#0E0B1F',
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: '#FFF',
            fontSize: 36,
          },
          headerTitle: 'Geez',
          headerTitleAlign: 'left',
          headerRight: () => {
            return (
              <TouchableOpacity marginR-16>
                <Image source={Assets.icons.search} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({color}) => {
            return <Image assetName="iconTabExplore" tintColor={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Radio"
        component={Radio}
        options={{
          tabBarIcon: ({color}) => {
            return <Image assetName="iconTabRadio" tintColor={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color}) => {
            return <Image assetName="iconTabAccount" tintColor={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
