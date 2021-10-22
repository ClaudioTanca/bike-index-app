import { configureStore } from '@reduxjs/toolkit';
import { bikeFeature } from '../features/bikes/bike.slice';
import modalReducer from '../features/modal/modal.slice';
import applicationReducer from '../features/application/application.slice';

export const store = configureStore({
  reducer: {
    [bikeFeature.reducerPath]: bikeFeature.reducer,
    modal: modalReducer,
    application: applicationReducer,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(bikeFeature.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;