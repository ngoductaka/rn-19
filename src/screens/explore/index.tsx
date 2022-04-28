import React, { useState, useRef } from 'react';
import { Pressable } from 'react-native';
import { View, Text, Button, TouchableOpacity } from 'react-native-ui-lib';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setDataUser, fetchDataSS } from '../../redux/account.slice';

const Explore = () => {
  const dispath = useDispatch();
  const navigation = useNavigation();
  const state = useSelector((state: any) => state.account);
  // console.log('state', state);

  React.useEffect(() => {
    return () => {
      console.log('asdfasdfasdf');
    }
  }, []);

  const _handleChangeName = () => {
    navigation.push('VerifyPhone')
    // navigation.navigate('Account', {});
    // navigation.setOptions({ title: 'Updated!' })

    const action = setDataUser({
      name: 'ngoc duc'
    });

    dispath({ "payload": { "name": "ngoc duc" }, "type": "account/setDataUser" })

    dispath(fetchDataSS({
      age: 30,
    }))

  }

  return (
    <View flex center>
      <Text>{state.name} - {state.age}</Text>
      <Pressable onPress={_handleChangeName}>
        <Text>Change Name</Text>
      </Pressable>
    </View>
  )
};

export default Explore;

