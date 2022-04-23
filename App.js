import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import RootStack from './src/nav/RootStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};


export default App;
