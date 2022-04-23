/**
 * @format
 */
import { Provider } from 'react-redux';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import './src/designSystem/AssetIcon';
import './src/designSystem/ColorStyle';
import './src/designSystem/TextStyle';
import RootStack from './src/nav/RootStack';
import { store } from './src/redux/store';

let persistor = persistStore(store)
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootStack />
            </PersistGate>
        </Provider>
    )
};

AppRegistry.registerComponent(appName, () => App);
