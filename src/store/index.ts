import { configureStore } from '@reduxjs/toolkit';
import { bikeFeature } from '../features/bikes/bike.slice';

export const store = configureStore({
  reducer: {
    [bikeFeature.reducerPath]: bikeFeature.reducer
  },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;