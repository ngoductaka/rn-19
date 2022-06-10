import { duration } from "moment";
import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, Easing } from "react-native";

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureSpan) => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        // console.log('rotation', rotation._value)
        rotation.setOffset(rotation._value)
        Animated.loop(
          Animated.timing(
            rotation,
            {
              toValue: 1,
              duration: 3000,
              easing: Easing.linear,
              // useNativeDriver: true,
            }
          )
        ).start();
      },
      onPanResponderMove: (event, gestureSpan) => {
        pan.setValue({
          x: gestureSpan.dx,
          y: gestureSpan.dy
        });
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
        rotation.flattenOffset();
        Animated.sequence([
          Animated.timing(pan, {
            toValue: {
              x: 0,
              y: 0,
            },
            duration: 1000,
            easing: Easing.sin,
          }),
          Animated.timing(
            rotation, {
              toValue: 0,
              duration: 1000
            }
          )
        ]).start()
        // Animated.timing(
        //   rotation
        // ).stop();
        // Animated.timing(
        //   rotation
        // ).stop();
        // Animated.timing(pan, {
        //   toValue: {
        //     x: 0,
        //     y: 0,
        //   },
        //   easing: Easing.bounce,
        // }).start();
        // // Animated.
        // Animated.timing(rotation, {
        //   toValue: 0,
        //   duration: 1
        // }).start();
        // pan.flattenOffset();
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    })
  ).current;

  return (
    <View style={styles.container}>

      <Animated.View
        style={{
          // backgroundColor: 'red',
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },]
        }}
        {...panResponder.panHandlers}
      >
        <Animated.View style={[{
          transform: [
            // { translateX: pan.x },
            // { translateY: pan.y },
            {
              rotate: rotation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              }),
            }
          ],
        }, styles.box]} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default App;