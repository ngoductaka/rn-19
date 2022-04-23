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
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import Input from '../../components/TextField/Input';
import InputPassword from '../../components/TextField/InputPassword';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../nav/RootStack';
import {
  requestLogin,
  loginSuccess,
  loginFail
} from '../../redux/account.slice';
const SignIn = () => {
  const dispath = useDispatch();
  const loading = useSelector((state: any) => state.account.loading)
  const isLogin = useSelector((state: any) => state.account.isLogin)
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const handleLogin = () => {
    dispath(requestLogin())
    fakeCallApi()
      .then(data => {
        dispath(loginSuccess(data));
        navigation.navigate('MainTab');
      })
      .catch(err => {
        dispath(loginFail(err))
      })
      .finally(() => {

      })
  }
  return (
    <View flex>
      <ImageBackground source={Assets.icons.bg_SignIn} style={{ flex: 1 }}>
        <View flex-2 centerV>
          <Text white title2b marginL-40 marginB-20>
            SIGN IN
          </Text>
          <Input {...{ value: email, onChangeText: setEmail }} assetName={'icon_email'} placeHolder="E-Mail" />
          <InputPassword {...{ value: pass, onChangeText: setPass }} />
          <Text
            r14
            style={styles.txt_forgot}
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            Forgot Password ?
          </Text>
          <View marginH-40>
            <Button
              label={loading ? "Loading...": "SIGN IN"}
              loading={loading}
              backgroundColor={Colors.primary}
              color={Colors.n3}
              labelStyle={Typography.b16}
              onPress={() => {
                handleLogin()
              }}
            />
          </View>
        </View>
        <View flex-1>
          <View row centerV marginH-40 marginB-24>
            <View flex height={1} backgroundColor={'#8D92A3'} />
            <Text marginH-16 b11 color="#8D92A3">
              Or connect with
            </Text>
            <View flex height={1} backgroundColor={'#8D92A3'} />
          </View>
          <View row center>
            <TouchableOpacity>
              <Image assetName="facebook" />
            </TouchableOpacity>
            <TouchableOpacity marginH-16>
              <Image assetName="google_plus" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image assetName="twitter" />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView>
          <Text white center r14>
            Don't have an account?{' '}
            <Text
              b14
              color={Colors.primary}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              Sign Up
            </Text>
          </Text>
        </SafeAreaView>
      </ImageBackground>
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


const fakeCallApi = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        name: 'rm - 19'
      })
    }, 2 * 1000)
  })
}