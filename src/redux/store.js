import { configureStore } from '@reduxjs/toolkit';
import accReducer from './account.slice';

export const store = configureStore({
  reducer: {
    account: accReducer
  }
});
