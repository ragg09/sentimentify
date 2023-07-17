import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from '@/src/redux/features/counter/counterSlice';
import { authAPI } from '@/src/redux/services/authAPI';

export const store = configureStore({
  reducer: { 
    counter: counterReducer,
    [authAPI.reducerPath]: authAPI.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(authAPI.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
