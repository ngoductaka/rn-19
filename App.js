import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

// const A = ()=>{
//   return(

//   )
// }
// const A = ()=>();
// View , Text ,...  JSX
// 1 file return ra JSX thi require import React;
// export default xac dinh function main trong file;
// CSS trong react native tuong dong voi CSS web,
//VD web: background-color => backgroundColor;
//justify-content => justifyContent;
// trong function return JSX => only return 1 parent;
const getName = () => {
  return 'Bryan';
};

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    </View>
  );

  // return (
  //   <View style={[styles.container, styles.horizontal]}>
  //     <ActivityIndicator />
  //     <ActivityIndicator size="large" />
  //     <ActivityIndicator size="small" color="#0000ff" />
  //     <ActivityIndicator size="large" color="#00ff00" />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;
