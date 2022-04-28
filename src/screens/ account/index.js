import { Pressable, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';


import _, { cloneDeep } from 'lodash'
import axios from 'axios';
import moment from 'moment';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const Account = ({ route }) => {
  const navigation = useNavigation();
  const { otherParam } = route.params;

  const _goBack = () => {
    navigation.goBack();
  }

  return (
    <View flex center>
      <Pressable onPress={_goBack}>
        <Text>go back</Text>
      </Pressable>
    </View>
  );
};
export default Account;