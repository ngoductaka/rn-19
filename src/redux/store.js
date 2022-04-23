import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

import { persistStore, persistCombineReducers } from 'redux-persist';
import accountReducer from './account.slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};


const persistedReducer = persistCombineReducers(persistConfig, {
  account: accountReducer
});


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  // middleware: [thunk]
});


// export const store = configureStore({
//   reducer: {
//     account: accountReducer
//   }
// });

