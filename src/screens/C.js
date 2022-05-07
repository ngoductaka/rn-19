import React from 'react';
import {
  View,
  Text,
  Assets,
  Colors,
  Image,
  TouchableOpacity,
  Button,
  Typography,
} from 'react-native-ui-lib';
import { ImageBackground, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const SignIn = () => {

  React.useEffect(() => {
    console.log('C === did mount');
    return () => {
      console.log("C ==== unmount")
    }
  }, []);

  const navigation = useNavigation();
  return (
    <View flex center>
      <Text>Screen C</Text>
      <Pressable onPress={() => {
        //   back to B
        // navigation.goBack();
        // back to A
        navigation.navigate('Explore')
        // VerifyPhone
      }}>
        <Text>go to B</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  txt_forgot: {
    marginTop: 16,
    marginBottom: 32,
    alignSelf: 'flex-end',
    marginRight: 40,
    color: Colors.white,
  },
});
