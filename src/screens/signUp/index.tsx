import React from 'react';
import {
  View,
  Text,
  Assets,
  Colors,
  Button,
  Typography,
} from 'react-native-ui-lib';
import {ImageBackground, StyleSheet} from 'react-native';
import Input from '../../components/TextField/Input';
import InputPassword from '../../components/TextField/InputPassword';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../nav/RootStack';
const SignUp = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View flex>
      <ImageBackground source={Assets.icons.bg_signUp} style={{flex: 1}}>
        <View flex-3 centerV>
          <Text white title2b marginL-40 marginB-20>
            SIGN UP
          </Text>
          <Input assetName={'icon_name'} placeHolder="Name" />
          <Input assetName={'icon_email'} placeHolder="E-Mail" />
          <InputPassword />
          <View marginH-40 marginT-32>
            <Button
              label="SIGN UP"
              backgroundColor={Colors.primary}
              color={Colors.n3}
              labelStyle={Typography.b16}
              onPress={() => {
                navigation.navigate('VerifyPhone');
              }}
            />
          </View>
          <View marginH-40 marginT-32>
            <Button
              label="SIGN IN"
              backgroundColor={Colors.primary}
              color={Colors.white}
              labelStyle={Typography.b16}
              onPress={() => {
                navigation.goBack();
              }}
              link
            />
          </View>
        </View>
        <View flex-1></View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  txt_forgot: {
    marginTop: 16,
    marginBottom: 32,
    alignSelf: 'flex-end',
    marginRight: 40,
    color: Colors.white,
  },
});
