import { StyleSheet, Animated, View, Dimensions, Easing } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-ui-lib';
const { height, width } = Dimensions.get('window');
const App = () => {
  const position = React.useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const opacity = React.useRef(new Animated.Value(1)).current;

  // Animated.Value // value
  // Animated.spring // type 
  // Animated.View // Text Image
  React.useEffect(() => {

  }, [position]);
  const _goDown = () => {

    Animated.timing(position, {
      toValue: {
        x: 0,
        y: 500,
      },
      duration: 1e4
      // delay: 1e3,
    }).start();

    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 1e4
    }).start();
  }
  const _goUp = () => {
    Animated.spring(position, {
      toValue: {
        x: 0,
        y: 0,
      },
      // delay: 1e3,
    }).start();

    Animated.spring(opacity, {
      toValue: 1,
    }).start();
  };
  const _goRight = () => {

    Animated.spring(position, {
      toValue: {
        x: -width,
        y: 0,
      },
      // delay: 1e3,
    }).start();

    console.log(position.x, position.y);

  };
  const _goLeft = () => {
    Animated.spring(position, {
      toValue: {
        x: 0,
        y: 0,
      },
      // delay: 1e3,
    }).start();

    console.log({ ...position.getLayout() });
  };

  const _goMixed = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(position, {
          toValue: {
            x: width - 100,
            y: 0,
          },
        }),
        Animated.timing(opacity, {
          toValue: 0,
        }),
      ]),
      Animated.parallel([
        Animated.timing(position, {
          toValue: {
            x: width - 100,
            y: width,
          },
          duration: 2000
        }),
        Animated.timing(opacity, {
          toValue: 1,
        }),
      ]),
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
      })
    ]).start();

  }

  const remove = () => {
    Animated.spring(opacity, {
      toValue: 0,
      easing: Easing.bezier(0, 2, 1, -1)
    }).start();
  }
  
  const addNew = () => {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.bezier(0, 2, 1, -1)
    }).start();
  }

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[{ flex: 1 }, {
        // backgroundColor: opacity.interpolate({
        //   inputRange: [0, 0.1, 0.5, 0.9, 1],
        //   outputRange: ['blue', 'red', '#3e4184', '#31af29', '#120d7f']
        // })
      }]}>
        <Animated.View style={[styles.box, {
          // top: position.y, left: position.x,
          // transform: [
          //   // {
          //   //   scale: opacity.interpolate({
          //   //     inputRange: [0, 1],
          //   //     outputRange: [2, 1]
          //   //   })
          //   // },
          //   {
          //     translateX: opacity.interpolate({
          //       inputRange: [0, 1],
          //       outputRange: [width, 0]
          //     })
          //   }
          // ],
          height: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [90, 0]
          }),
          width: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [90, 0]
          }),
          // backgroundColor: opacity.interpolate({
          //   inputRange: [0, 0.1, 0.5, 0.9, 1],
          //   outputRange: ['blue', 'red', '#3e4184', '#31af29', '#120d7f']
          // })
        }]}>
        </Animated.View>
      </Animated.View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button label='_go Down' onPress={_goDown} />
        <Button label='_go Up' onPress={_goUp} />
        <Button label='_go right' onPress={_goRight} />
        <Button label='_go left' onPress={_goLeft} />
        <Button label='_go mixed' onPress={_goMixed} />
        <Button label='_go delete' onPress={remove} />
        <Button label='_go addNew' onPress={addNew} />
      </View>

    </View>
  );
};

export default App;

const Box = () => {
  return (
    <View style={styles.box}>
      {/* <View style={{ backgroundColor: 'blue', width }} />
      <View style={{ backgroundColor: 'red', width }} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#000',
    // flexDirection: 'row'
  }
});
