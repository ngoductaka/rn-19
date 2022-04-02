import {StyleSheet, Dimensions, Animated} from 'react-native';
import React from 'react';
import {Text, View, Button, Colors, Typography} from 'react-native-ui-lib';
import Input from '../../components/TextField/Input';
import InputPassword from '../../components/TextField/InputPassword';

const width_screen = Dimensions.get('window').width;
const ForgotPassword = () => {
  const translateX = new Animated.Value(0);
  const opacityTextA = new Animated.Value(1);
  let showA = true;
  return (
    <View flex backgroundColor="#0E0B1F">
      <Text white title3b margin-40>
        Forgot Password?
      </Text>
      <Text r12 marginL-40 color="#8D92A3" marginB-24>
        If you need help resetting your password,{'\n'}we can help by sending
        you a link to{'\n'}reset it.
      </Text>
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [
            {
              translateX: translateX,
            },
          ],
        }}>
        <View
          style={{
            width: width_screen,
            height: 200,
          }}>
          <Input assetName="icon_email" placeHolder="E-Mail" />
          <View marginH-40 marginT-32>
            <Button
              label="SEND"
              backgroundColor={Colors.primary}
              color={Colors.n3}
              labelStyle={Typography.b16}
              onPress={() => {
                Animated.timing(translateX, {
                  duration: 500,
                  useNativeDriver: true,
                  toValue: -width_screen,
                }).start();
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: width_screen,
            height: 200,
          }}>
          <InputPassword />
          <InputPassword placeHolder="Confirm Password" />
          <View marginH-40 marginT-32>
            <Button
              label="CHANGE PASSWORD"
              backgroundColor={Colors.primary}
              color={Colors.n3}
              labelStyle={Typography.b16}
              onPress={() => {
                Animated.timing(translateX, {
                  duration: 500,
                  useNativeDriver: true,
                  toValue: 0,
                }).start();
              }}
            />
          </View>
        </View>
      </Animated.View>

      <View>
        <Animated.Text
          style={{
            opacity: opacityTextA,
            color: '#FFF',
          }}>
          Text A
        </Animated.Text>
        <Animated.Text
          style={{
            position: 'absolute',
            opacity: opacityTextA.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            color: '#FFF',
          }}>
          Text B
        </Animated.Text>

        <Text
          white
          onPress={() => {
            if (showA) {
              Animated.timing(opacityTextA, {
                duration: 500,
                toValue: 0,
                useNativeDriver: true,
              }).start();
              showA = false;
            } else {
              Animated.timing(opacityTextA, {
                duration: 500,
                toValue: 1,
                useNativeDriver: true,
              }).start();
              showA = true;
            }
          }}>
          Change Text
        </Text>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
