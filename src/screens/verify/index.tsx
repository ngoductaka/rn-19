import {Animated, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {View} from 'react-native-ui-lib';
import EnterPhone from './components/EnterPhone';
import EnterCode from './components/EnterCode';
const width_screen = Dimensions.get('window').width;
const VerifyPhone = () => {
  const translateX = new Animated.Value(0);
  return (
    <View flex backgroundColor="#0E0B1F">
      <Animated.View
        style={{
          flexDirection: 'row',
          width: width_screen * 2,
          transform: [{translateX: translateX}],
        }}>
        <EnterPhone
          onContinue={() => {
            Animated.timing(translateX, {
              duration: 500,
              toValue: -width_screen,
              useNativeDriver: true,
            }).start();
          }}
        />
        <EnterCode />
      </Animated.View>
    </View>
  );
};

export default VerifyPhone;

const styles = StyleSheet.create({});
