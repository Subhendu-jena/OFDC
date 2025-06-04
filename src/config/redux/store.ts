// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slice/authSlice';
import languageReducer from '../redux/slice/languageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
