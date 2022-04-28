import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Throughwalk from '../screens/throughwalk';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import ForgotPassword from '../screens/forgotPassword';
import VerifyPhone from '../screens/verify';
import MainTab from './MainTab';

export type RootStackParamList = {
  Throughwalk: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  VerifyPhone: undefined;
  MainTab: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  const account = useSelector((state: any) => state.account);
  console.log('account', account);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={account.isLogin ? "MainTab" : 'SignIn'}>

        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{
            headerShown: false,
          }}
        />
        {/* 
              <Stack.Screen
                name="MainTab"
                component={MainTab}
                options={{
                  headerShown: false,
                }}
              /> */}
        <Stack.Screen
          name="Throughwalk"
          component={Throughwalk}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#0E0B1F',
            },
          }}
        />
        <Stack.Screen
          name="VerifyPhone"
          component={VerifyPhone}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#0E0B1F',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
