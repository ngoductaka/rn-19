import { Animated, Dimensions, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import EnterPhone from './components/EnterPhone';
import EnterCode from './components/EnterCode';
import { useNavigation } from '@react-navigation/native';
const width_screen = Dimensions.get('window').width;
const VerifyPhone = (props) => {

  const translateX = new Animated.Value(0);
  const navigation = useNavigation();
  React.useEffect(() => {

    navigation.setOptions({ title: 'loading...' })
    console.log('B === did mount', props.route.params);
    return () => {
      console.log("B ==== unmount")
    }
  }, []);
  return (
    <View flex center>
      <Text>Screen B</Text>
      <Pressable onPress={() => {
        navigation.setOptions({ title: 'Updated!' })
        // navigation.goBack();
        // navigation.navigate("C");

        // VerifyPhone
      }}>
        <Text>go to C</Text>
      </Pressable>
    </View>
  )

  return (
    <View flex backgroundColor="#0E0B1F">
      {/* <Animated.View
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
      </Animated.View> */}
    </View>
  );
};

export default VerifyPhone;

const styles = StyleSheet.create({});
