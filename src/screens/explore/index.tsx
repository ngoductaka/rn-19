import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, Easing } from "react-native";

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureSpan) => {
        console.log('gestureSpan', gestureSpan, pan);
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
        console.log('pan', pan)
      },
      onPanResponderRelease: () => {
        Animated.timing(pan, {
          toValue: {
            x: 0,
            y: 0,
          },
          easing: Easing.bounce,
        }).start();
        // Animated.
        Animated.timing(rotation, {
          toValue: 0,
          duration: 1
        }).start();
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
      <Animated.Text style={{
        transform: [
          { translateX: pan.x },
          { translateY: pan.y },
          {
            rotate: rotation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }
        ]
      }}
        {...panResponder.panHandlers}
      >Drag this box!</Animated.Text>
      <Animated.View
        style={{
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },
            {
              rotate: rotation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })
            }
          ]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
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