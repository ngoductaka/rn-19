import React, { useState, useRef, useEffect } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, TextInput, Dimensions } from 'react-native';
import { View, Text, Button, TouchableOpacity } from 'react-native-ui-lib';
import { useFocusEffect, useNavigation, useIsFocused } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';


const { height, width } = Dimensions.get('window');
const Explore = () => {

  const navigation = useNavigation();
  const isForcus = useIsFocused();

  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log('state', state);


  // const [c, setC] = React.useState(0);
  // const [f, setF] = React.useState(0);

  // const _handleCelsiusChange = (value: string) => {
  //   setC(+value);
  //   setF(toCelsius(Number(value)));
  // };

  // const _handleFahrenheitChange = (value: string) => {
  //   setF(+value);
  //   setC(toFahrenheit(Number(value)));
  // };
  React.useEffect(() => {
    console.log('A ==== did mount');
    return () => {
      console.log("A ===== unmount");
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log(' forcus on screen');
      return () => {
        console.log(' out of screen');
      };
    }, [])
  );


  console.log('isForcus', isForcus);

  return (
    <View flex center>
      {/* <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#fff' }}> */}
      {/* <View style={{ height: height }}>
        <View style={{ flex: 1.2, backgroundColor: '#FB3A42', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1.5 }} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.title, { textAlign: 'center' }]}>Celsius</Text>
          </View><View style={{ flex: 2 }}>
            <TextInput
              keyboardType='numeric'
              style={[styles.input, { color: '#fff', marginTop: 30, textAlign: 'center' }]}
              value={c + ''}

              onChangeText={_handleCelsiusChange} />
          </View>
        </View>

        <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.triangle} />
          <View style={{ flex: 1 }}>
            <TextInput
              keyboardType='numeric'
              style={[styles.input, { color: '#FB3A42', marginTop: 30, textAlign: 'center' }]}
              value={f + ''}
              onChangeText={_handleFahrenheitChange} />
            <Text style={[styles.title, { color: '#FB3A42', textAlign: 'center' }]}>Fahrenherit</Text>
          </View>
        </View>
      </View> */}
      {/* </KeyboardAwareScrollView> */}
      <Text>Screen A</Text>
      <Pressable onPress={() => {
        // VerifyPhone
        navigation.navigate('VerifyPhone', { from: 'explore' });
      }}>
        <Text>go to B</Text>
      </Pressable>

    </View>
  )
};

export default Explore;

const styles = StyleSheet.create({
  input: {
    // height: 50,
    // width: ''
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 20,
    // padding: 10,
    fontSize: 80,
    fontWeight: '500'

  },
  title: {
    fontSize: 35,
    color: '#fefefe',
    fontWeight: '200'

  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: width / 2,
    borderRightWidth: width / 2,
    borderTopWidth: width / 4,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#FB3A42",
  },

});

function toCelsius(fahrenheit: number) {
  return +((+fahrenheit - 32) * 5 / 9).toFixed(2);
}

function toFahrenheit(celsius: number) {
  return +((+celsius * 9 / 5) + 32).toFixed(2);
}
