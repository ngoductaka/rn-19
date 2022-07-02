import { Pressable, StyleSheet, Dimensions, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';


import _, { cloneDeep } from 'lodash'
import axios from 'axios';
import moment from 'moment';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const Account = ({ route }) => {
  const navigation = useNavigation();
  const _goBack = () => {
    navigation.goBack();
  }

  const [userData, setUserData] = useState({});
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _getUserData();
  }, []);

  _getUserData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:3000/nodejs/nodejs09-10')
      setUserData(data)
    } catch (err) {
      setErr(err);
      console.log('err', err)
      Alert.alert("call api error")
    } finally {

      setLoading(false);
    }
  }


  return (
    <View flex center>
      <Pressable>
        <Text>Account page</Text>
        {loading ? <Text>loading ...</Text> : null}
        {_.isEmpty(userData) ? null : <View>
          {Object.keys(userData).map(key => {
            return <Text>{key}: {userData[key]}</Text>
          })}
        </View>}

      </Pressable>
    </View>
  );
};
export default Account;