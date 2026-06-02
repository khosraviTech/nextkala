// lib/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
// Import your slices here as you create them
// import authReducer from './features/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add reducers here
      // auth: authReducer,
    },
  });
};

// Infer the type of the store for TypeScript
export type AppStore = ReturnType<typeof makeStore>;
// Infer the RootState and AppDispatch types
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];